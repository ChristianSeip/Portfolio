import {Component, Input, OnInit} from '@angular/core';
import {state, style, trigger} from "@angular/animations";
import {FormService} from "../../form.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../dialog/dialog.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('validator', [
      state('valid', style({
        color: '#226707'
      })),
      state('invalid', style({
      })),
    ])
  ],
})
export class ContactComponent implements OnInit {

  @Input() name: string = '';
  @Input() mail: string = '';
  @Input() phone: string = '';
  @Input() message: string = '';

  constructor(private formService: FormService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  resetForm() {
    this.name = '';
    this.mail = '';
    this.phone = '';
    this.message = '';
  }

  /**
   * Check if form has a valid name.
   */
  isValidName(): boolean {
    if(this.name !== undefined) {
      this.name = this.name.trim();
      if(this.name.length >= 3 && this.name.length <= 50) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if form has a valid name.
   */
  isValidPhone(): boolean {
    this.phone = this.phone.trim();
    if(this.phone.length > 17) {
      return false;
    }
    return true;
  }

  /**
   * Check if form has a valid mail.
   */
  isValidMail(): boolean {
    if(this.mail !== undefined) {
      this.mail = this.mail.trim();
      if(this.mail.length <= 65) {
        if(this.mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Check if form has a valid message.
   */
  isValidMessage(): boolean {
    if(this.message !== undefined) {
      this.message = this.message.trim();
      if(this.message.length >= 10 && this.message.length <= 1000) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if form is valid.
   */
  isValidForm(): boolean {
    return this.isValidName() && this.isValidMail() && this.isValidMessage();
  }

  /**
   * Send form and open dialog to show response.
   */
  sendForm(): void {
    this.formService.senForm(this.name, this.mail, this.phone, this.message).subscribe((response: any) => {
      if(response.success) {
        this.resetForm();
      }

      this.dialog.open(DialogComponent, {
        data: response
      });
    });
  }
}
