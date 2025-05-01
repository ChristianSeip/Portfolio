import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  templateUrl: './page-not-found.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
