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
      image: './assets/wallpapers/atencioninmediata.jpg'
    },
    {
      title: 'Estrategia',
      description: 'No solo buscamos estrategias y herramientas sino soluciones que impacten.',
      image: './assets/wallpapers/estrategia.jpg'
    },
    {
      title: 'Optimización',
      description: 'Continuamente queremos mantener nuestras aplicaciones de manera óptima y efectiva.',
      image: './assets/wallpapers/optimizacion.jpg'
    },
    {
      title: 'Innovación',
      description: 'Queremos siempre estar a la vanguardia en la utilización del desarrollo y las tecnologías.',
      image: './assets/wallpapers/innovacion_2.jpg'
    }
  ];
}
