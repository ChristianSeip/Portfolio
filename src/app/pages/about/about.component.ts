import {Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactFormComponent} from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  baseTechnologies = [
    { title: 'PHP (Symfony)', desc: 'Skalierbare Backend-Entwicklung und API-Architektur.' },
    { title: 'MySQL / MariaDB', desc: 'Relationale Datenmodellierung und performante Abfragen für Web-Apps.' },
    { title: 'REST-APIs', desc: 'Wartbaren API-Schnittstellen mit Authentifizierung.' },
    { title: 'JavaScript', desc: 'Langjährige Erfahrung mit JavaScript und modernen JS-Patterns.' },
    { title: 'TypeScript', desc: 'Strukturierter Code mit typensicherer Architektur.' },
    { title: 'Angular', desc: 'Professionelle SPAs mit klarer Struktur' },
    { title: 'Tailwind CSS', desc: 'UI-Entwicklung mit Utility-First-Ansatz und Custom-Themes.' },
    { title: 'Bootstrap', desc: 'Klassisches Komponenten-Framework für schnelle Mockups & MVPs.' },
    { title: 'Git', desc: 'Versionskontrolle & Branch-Strategien' },
    { title: 'Google AdManager', desc: 'Integration und Automatisierung von Kampagnen & Werbemitteln via API.' },
    { title: 'Jira (Admin)', desc: 'Erstellung von Projekten & Custom Fields für dev-orientierte Teams.' }
  ];

  @ViewChild('carousel') carouselRef!: ElementRef;

  ngAfterViewInit(): void {
    const el = this.carouselRef.nativeElement as HTMLElement;

    let scrollAmount = 0;
    const scrollStep = 0.5;
    let isUserScrolling = false;

    const interval = setInterval(() => {
      if (!isUserScrolling) {
        scrollAmount += scrollStep;
        el.scrollLeft = scrollAmount;
        if (scrollAmount >= el.scrollWidth / 2) scrollAmount = 0;
      }
    }, 16);

    el.addEventListener('pointerdown', () => isUserScrolling = true);
    el.addEventListener('pointerup', () => setTimeout(() => isUserScrolling = false, 1000));
  }

}
