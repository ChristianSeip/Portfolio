import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../page-title.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit(): void {
    this.pageTitleService.set('Home');
  }


}
