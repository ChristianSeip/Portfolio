import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  page: any;
  width: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver,) {
    this.width = window.innerWidth;
    this.breakpointObserver.observe(["(max-width: 960px)"]).subscribe((result: BreakpointState) => {
      this.width = window.innerWidth;
      if(result.matches && this.isOpen) {
        this.toggle(true);
      }
    });
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment:any) => {
      this.page = fragment;
      if(this.page === '' || this.page === null) {
        this.page = 'home';
      }
    });
  }

  toggle(force: boolean) {
    if(!force && this.width > 600) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

}
