import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  host: { ngSkipHydration: 'true' },
})
export class CarouselComponent {
  servicios: any[];
  //responsiveOptions: any[];

  constructor() {
    this.servicios = [
      {
        title: 'Consultoría',
        description: 'Servicios de asesoría integral en gestión de procesos para garantizar que las soluciones tecnológicas.',
        image: './assets/images/consultoria.jpg'
      },
      {
        title: 'Innovación',
        description: 'Servicios de incluyen procesos de reingeniería, analítica, gestión, y procedimientos de datos para identificar causa raíz de problemas en una organización que sean solucionables mediante el uso de tecnología.',
        image: './assets/images/innovacion.jpg'
      },
      {
        title: 'BPO',
        description: 'Servicios tercerizados de bajo costo y alta productividad para nuestros clientes, aplicando técnicas de reingeniería para optimizar tiempos de respuesta y generación de mayor valor.',
        image: './assets/images/bpo.jpg'
      },
    ];

    /*
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];  */
  }
}