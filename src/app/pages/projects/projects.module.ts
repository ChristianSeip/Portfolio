import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ProjectsComponent,
    ProjectCardComponent
  ]
})
export class ProjectsModule {}
