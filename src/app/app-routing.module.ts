import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Start' },
  { path: 'about', component: AboutComponent, title: 'Über mich' },
  { path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'projects/:slug', loadChildren: () => import('./pages/project-detail/project-detail.module').then(m => m.ProjectDetailModule) },

  { path: 'legal-notice', loadChildren: () => import('./pages/legal-notice/legal-notice.module').then(m => m.LegalNoticeModule) },
  { path: 'impressum', redirectTo: 'legal-notice', pathMatch: 'full' },
  { path: 'legal-notes', redirectTo: 'legal-notice', pathMatch: 'full' },

  { path: 'privacy', loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: 'datenschutz', redirectTo: 'privacy', pathMatch: 'full' },

  { path: 'terms', loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule) },
  { path: 'agb', redirectTo: 'terms', pathMatch: 'full' },
  { path: 'nutzungsbedingungen', redirectTo: 'terms', pathMatch: 'full' },
  { path: 'anb', redirectTo: 'terms', pathMatch: 'full' },

  { path: '**', component: PageNotFoundComponent, title: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
