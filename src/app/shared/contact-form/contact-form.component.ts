import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';

interface MessageToast {
  text: string;
  success: boolean;
  id: number;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    message: ['']
  });

  loading = false;
  popups: MessageToast[] = [];
  private popupId = 0;

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    this.popups = [];

    this.http.post<any>('https://web-api.seip.io/contact/request', this.form.value).subscribe({
      next: res => {
        const messages = res?.messages || ['Erfolgreich gesendet!'];
        messages.forEach((msg: string) => this.addPopup(msg, true));
        this.form.reset();
        this.loading = false;
      },
      error: err => {
        const messages = Array.isArray(err.error) ? err.error : err.error?.messages || ['Etwas ist schiefgelaufen.'];
        messages.forEach((msg: string) => this.addPopup(msg, false));
        this.loading = false;
      }
    });
  }

  addPopup(message: string, success: boolean) {
    const id = this.popupId++;
    this.popups.push({ text: message, success, id });
    setTimeout(() => this.closePopup(id), 6000); // Automatisches Entfernen nach 6s
  }

  closePopup(id: number) {
    this.popups = this.popups.filter(p => p.id !== id);
  }
}
