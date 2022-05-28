import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private title: string;

  constructor(private titleService: Title) {
    this.title = this.getGlobalTitle();
  }

  getGlobalTitle(): string {
    let t = this.titleService.getTitle();
    return t.substring(0, t.indexOf('-'));
  }

  set(suffix: string) {
    this.titleService.setTitle(`${this.title} - ${suffix}`);
  }

}
