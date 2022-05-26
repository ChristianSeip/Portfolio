import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
      })),
      state('hide', style({
        display: 'none'
      })),
      transition('hide => show', [
        animate(".2s", keyframes([
          style({ display: 'block', opacity: 0, transform: 'rotateY(-100deg)', transformOrigin: 'right'}),
          style({ display: 'block', opacity: 1, transform: 'rotateY(0)', transformOrigin: 'right'}),
        ]))
      ]),
      transition('show => hide', [
        animate(".2s", keyframes([
          style({ opacity: 1, transform: 'rotateY(0)', transformOrigin: 'left'}),
          style({ opacity: 0, transform: 'rotateY(-100deg)', transformOrigin: 'left'}),
        ]))
      ]),
    ]),
  ],
})
export class PortfolioComponent implements OnInit {

  showDesc = [false, false];

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(id: number) {
    this.showDesc[id] = !this.showDesc[id];
  }

}
