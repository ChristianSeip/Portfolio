import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { ProjectDetail } from '../../core/models/project-detail.model';
import { extractIdFromSlug } from '../../core/utils/slug';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})

export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | null = null;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const id = slug ? extractIdFromSlug(slug) : null;

    if (id !== null) {
      this.projectService.getProjectById(id).subscribe({
        next: (data) => this.project = data,
        error: (err) => this.error = 'Projekt konnte nicht geladen werden.'
      });
    }
    else {
      this.error = 'Ungültige Projekt-URL';
    }
  }
}
