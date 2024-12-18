import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [GalleriaModule,
    CarouselModule
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  servicios: any[];
  //responsiveOptions: any[];

  constructor() {
    this.servicios = [
      {
        title: 'Consultoría',
        description: 'A través de las mejores prácticas de TI, damos soluciones de gran valor a nuestros clientes a través de nuestros servicios.',
        image: 'img/consultoria.jpg'
      },
      {
        title: 'Innovación',
        description: 'Servicios de incluyen procesos de reingeniería, analítica, gestión, y procedimientos de datos para identificar causa raíz de problemas en una organización que sean solucionables mediante el uso de tecnología.',
        image: 'img/innovacion.jpg'
      },
      {
        title: 'BPO',
        description: 'Servicios tercerizados de bajo costo y alta productividad para nuestros clientes, aplicando técnicas de reingeniería para optimizar tiempos de respuesta y generación de mayor valor.',
        image: 'img/bpo.jpg'
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