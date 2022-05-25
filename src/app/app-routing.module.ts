import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {LegalNoticeComponent} from "./pages/legal-notice/legal-notice.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
  {path: 'legal', redirectTo: 'legal-notice', pathMatch: 'full'},
  {path: 'privacy', component: PrivacyComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
