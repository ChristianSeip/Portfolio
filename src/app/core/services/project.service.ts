import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProjectDetail} from '../models/project-detail.model';
import {ProjectListItem} from '../models/project-list-item.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = 'https://web-api.seip.io/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectListItem[]> {
    return this.http.get<ProjectListItem[]>(this.apiUrl);
  }

  getProjectById(id: number): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${this.apiUrl}/${id}`);
  }
}
