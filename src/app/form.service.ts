import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private api = "https://www.seip.io/api/index.php?ressource=mailer&";

  constructor(private http: HttpClient) { }

  senForm(name: string, mail: string, phone: string, message: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let body = JSON.stringify({name: name, mail: mail, phone: phone, message: message});
    return this.http.post(`${this.api}action=send`, body);
  }
}
