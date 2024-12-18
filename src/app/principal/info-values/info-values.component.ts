import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-info-values',
  imports: [GalleriaModule],
  templateUrl: './info-values.component.html',
  styleUrl: './info-values.component.css',
  host: { ngSkipHydration: 'true' },
 
})
export class InfoValuesComponent {
  services = [
    {
      title: 'Atención Inmediata',
      description: 'Somos oportunos en cada requerimiento solicitado por nuestros clientes.',
      image: 'img/atencioninmediata.jpg'
    },
    {
      title: 'Estrategia',
      description: 'No solo buscamos estrategias y herramientas sino soluciones que impacten.',
      image: 'img/estrategia.jpg'
    },
    {
      title: 'Optimización',
      description: 'Continuamente queremos mantener nuestras aplicaciones de manera óptima y efectiva.',
      image: 'img/optimizacion.jpg'
    },
    {
      title: 'Innovación',
      description: 'Queremos siempre estar a la vanguardia en la utilización del desarrollo y las tecnologías.',
      image: 'img/innovacion_2.jpg'
    }
  ];
}
