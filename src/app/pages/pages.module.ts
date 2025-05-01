import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    LegalNoticeComponent,
    PrivacyComponent,
    PageNotFoundComponent
  ],
	imports: [
		CommonModule,
		RouterLink
	]
})
export class PagesModule { }
