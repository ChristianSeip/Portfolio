import { Component, OnInit, HostBinding } from '@angular/core';
import {Router} from "@angular/router";
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate("1s", keyframes([
          style({ opacity: 1, transform: 'translateX(0)'}),
          style({ opacity: 0, transform: 'translateX(-250px)'}),
        ]))
      ]),
      transition('closed => open', [
        animate("1s", keyframes([
          style({ display: 'flex', opacity: 0, transform: 'translateX(-250px)'}),
          style({ opacity: 1, transform: 'translateX(0)'}),
        ]))
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {

  isOpen: boolean = true;

  constructor(public router: Router, private breakpointObserver: BreakpointObserver,) {
    this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((result: BreakpointState) => {
      if(result.matches && this.isOpen) {
        this.toggle();
      }
    });
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
