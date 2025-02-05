import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-footer',
  imports: [CommonModule],
  templateUrl: './sub-footer.component.html',
  styleUrl: './sub-footer.component.css'
})
export class SubFooterComponent implements OnInit{

  socialNetworks: any = [
    {name: 'Facebook', Url: 'https://www.facebook.com/', img: './assets/socialNetworks/facebook.png'},
    {name: 'Instagram', Url: 'https://www.instagram.com/', img: './assets/socialNetworks/instagram.png'},
    {name: 'Linkedin', Url: 'https://co.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F', img: './assets/socialNetworks/linkedin.png'}
  ]

  menuFooter: string[] = [
    'Inicio',
    'Servicio',
    'Productos',
    'Nosotros'
  ]
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  
  scrollToSection(section: string): void {
    const sectionMap: { [key: string]: string } = {
      'Inicio': 'navbar',
      'Servicio': 'carousel',
      'Productos': 'products',
    };
    if (section === 'Inicio') {
      this.router.navigate(['/principal']);
    }
    if (section === 'Servicio') {
      this.router.navigate(['/principal']);
    }
    if (section === 'Productos') {
      this.router.navigate(['/principal']);
    }
    if (section === 'Nosotros') {
      this.router.navigate(['/aboutUs']);
    } else {
      const sectionId = sectionMap[section];
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
  
}
