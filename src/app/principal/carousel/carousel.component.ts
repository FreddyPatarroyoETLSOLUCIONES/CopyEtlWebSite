import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: any[] = [];
  activeIndex: number = 0;
  showThumbnails: boolean = false; // Opcional: ocultar miniaturas
  fullscreen: boolean = false;

  constructor() {
    // Datos del carrusel (pueden ser rutas locales o URLs externas)
    this.images = [
      {
        itemImageSrc: 'img/div1.jpg',
        title: 'Div 1',
        alt: 'Primer div'
      },
      {
        itemImageSrc: 'img/div2.jpg',
        title: 'Div 2',
        alt: 'Segundo div'
      },
      {
        itemImageSrc: 'img/div3.jpg',
        title: 'Div 3',
        alt: 'Tercer div'
      }
    ];
  }

  // Métodos auxiliares (opcional para funcionalidad adicional)
  galleriaClass() {
    return this.fullscreen ? 'custom-galleria-fullscreen' : '';
  }

  toggleFullScreen() {
    this.fullscreen = !this.fullscreen;
  }
}
