<?php
define('ROOT_DIR', __DIR__);

if(isset($_GET['ressource'])) {
  $ressource = strtolower($_GET['ressource']);

  switch ($ressource) {
    case 'mailer':
      require_once ROOT_DIR . '/Mailer.class.php';
      $response = new \API\Mailer();
      return;
  }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode(array(
  'success' => false,
  'msg' => 'We don\'t know how to process your request.',
));
