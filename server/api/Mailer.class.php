<?php
namespace API;
use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\SMTP;
use \PHPMailer\PHPMailer\Exception;

require_once ROOT_DIR . '/API.class.php';
require_once ROOT_DIR . '/PHPMailer/src/Exception.php';
require_once ROOT_DIR . '/PHPMailer/src/PHPMailer.php';
require_once ROOT_DIR . '/PHPMailer/src/SMTP.php';

class Mailer extends API
{

  private string $name;
  private string $phone;
  private string $mail;
  private string $message;

  private PHPMailer $mailer;

  public function __construct()
  {
    parent::__construct();
    if($this->getAction() === 'send') {
      $json = file_get_contents('php://input');
      $post = json_decode($json, true);
      $this->name = trim($post['name']);
      $this->mail = trim($post['mail']);
      $this->phone = substr(trim($post['phone']), 0, 17);
      $this->message = trim($post['message']);
      if($this->isValidForm() && !$this->isSpam()) {
        $this->logAction(get_class($this));
        $this->sendMail();
      }
    }
  }

  /**
   * Try to send mail and response the user with success informations.
   *
   * @return void
   */
  private function sendMail() {
    try {
      $this->mailer = new PHPMailer(true);

      //Server settings
      $this->mailer->isSMTP();
      $this->mailer->Host       = 'hostname';
      $this->mailer->SMTPAuth   = true;
      $this->mailer->Username   = 'mail';
      $this->mailer->Password   = 'password';
      $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
      $this->mailer->Port       = 465;

      //Recipients
      $this->mailer->setFrom('mail', 'Name');
      $this->mailer->addAddress('mail', 'Name');
      $this->mailer->addReplyTo($this->mail, $this->name);

      //Content
      $this->mailer->isHTML(true);                                  //Set email format to HTML
      $this->mailer->Subject = 'A new request';
      $this->mailer->Body    = nl2br($this->getMailBody());
      $this->mailer->AltBody = $this->getMailBody();

      $this->mailer->send();
      $result = [
        'success' => true,
        'msg' => 'Your message has been sent successfully.',
      ];
      $this->sendResponse($result);
    }
    catch (Exception $e) {
      $this->sendErrorResponse('There was an error sending your message. Please try again later.');
    }
  }

  /**
   * Get formatted mail body text.
   *
   * @return string
   */
  private function getMailBody(): string {
    $text = "Name: " . $this->name . "\r\n";
    $text .= "Mail: " . $this->mail . "\r\n";
    if($this->phone != '') {
      $text .= "Phone: " . $this->phone . "\r\n";
    }
    $text .= "Message: " . htmlspecialchars($this->message) . "\r\n";
    return $text;
  }

  /**
   * Check if we have a valid name.
   *
   * @return bool
   */
  private function isValidName(): bool
  {
    if($this->name != '' && strlen($this->name) >= 3 && strlen($this->name) <= 50) {
      return true;
    }
    return false;
  }

  /**
   * Check if we have a valid mail.
   *
   * @return bool
   */
  private function isValidMail(): bool
  {
    if(filter_var($this->mail, FILTER_VALIDATE_EMAIL)) {
      return true;
    }
    return false;
  }

  /**
   * Check if we have a valid message.
   *
   * @return bool
   */
  private function isValidMessage(): bool
  {
    if($this->message != '' && strlen($this->message) >= 10 && strlen($this->name) <= 1000) {
      return true;
    }
    return false;
  }

  /**
   * Check if form is valid.
   *
   * @return bool
   */
  private function isValidForm(): bool
  {
    if(!$this->isValidMail()) {
      $this->sendErrorResponse('Invalid Mail.');
      return false;
    }

    if(!$this->isValidName()) {
      $this->sendErrorResponse('Invalid Name.');
      return false;
    }

    if(!$this->isValidMessage()) {
      $this->sendErrorResponse('Invalid Message.');
      return false;
    }
    return true;
  }

  /**
   * Check if user is flooding our form.
   *
   * @return bool
   */
  private function isSpam(): bool
  {
    $ip = inet_pton($_SERVER['REMOTE_ADDR']);
    $stmt = $this->getDB()->prepare("
        SELECT *
        FROM action_log
        WHERE ip = ?
        AND action = ?
        AND api = ?"
    );
    $stmt->execute(array($ip, $this->getAction(), get_class($this)));
    $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    foreach ($result as &$entry) {
      if(($entry['timestamp'] + 180) > $this->time) {
        $this->sendErrorResponse('Flood control: Please don\'t spam and flood the form.');
        return true;
      }
    }
    return false;
  }
}
