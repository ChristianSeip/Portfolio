import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { SocialBarComponent } from './social-bar/social-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialBarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule { }
