import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { slugifyTitleWithId } from '../../core/utils/slug';
import { ProjectListItem } from '../../core/models/project-list-item.model';
import {ContactFormComponent} from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, ContactFormComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: ProjectListItem[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error('Fehler beim Laden der Projekte:', err)
    });
  }

  getSlug(project: ProjectListItem): string {
    return slugifyTitleWithId(project.id, project.title);
  }
}
