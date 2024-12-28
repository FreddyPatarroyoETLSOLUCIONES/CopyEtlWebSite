import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-about-us',
  imports: [CommonModule],
  templateUrl: './welcome-about-us.component.html',
  styleUrl: './welcome-about-us.component.css'
})
export class WelcomeAboutUsComponent {
  aboutUsContent = {
    title: 'Nuestra Empresa',
    subtitlePrefix: 'Expertos en soluciones de',
    subtitleHighlight: 'Alto Impacto',
    description: `Somos una empresa joven, con ganas y experiencia de profesionales con más de 10 años en el mercado 
      de servicios de tecnología y Sistemas de información. Contamos con la participación en proyectos de alto impacto, 
      desarrollamos soluciones de TI aplicadas en sectores como comunicaciones, transporte, comercio, logística, solidario, 
      salud, legal y servicios.`,
    image: 'assets/images/image_aboutUs.jpg',
  };

  skills = [
    {
      title: 'Diseñar',
      description:
        'Diseño y desarrollo de aplicaciones Web y Desktop, configurables, escalables y seguras.',
      isSelected: true,
    },
    {
      title: 'Mejorar',
      description: 'Modernización de aplicaciones existentes.',
      isSelected: false,
    },
    {
      title: 'Mantener y Soportar',
      description: 'Integración de aplicaciones y servicios.',
      isSelected: false,
    },
  ];
}
