import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  animations: [
    trigger('switchpage', [
      state('normal', style({
      })),
      state('change', style({
      })),
      transition('normal => change', [
        animate(".5s", keyframes([
          style({ opacity: 0, transform: 'rotateY(-100deg)', transformOrigin: 'right'}),
          style({ opacity: 1, transform: 'rotateY(0)', transformOrigin: 'right'}),
        ]))
      ]),
    ]),
  ],
})
export class PageContainerComponent implements OnInit {

  page: any;
  switch = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment:any) => {
      this.page = fragment;
      if(this.page === '' || this.page === null) {
        this.page = 'home';
      }
      this.switch = true;
      setTimeout(() => {
        this.switch = false;
      }, 500)
    });
  }

}
