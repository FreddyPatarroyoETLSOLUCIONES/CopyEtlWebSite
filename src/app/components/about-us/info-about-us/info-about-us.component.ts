import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-about-us',
    imports: [CommonModule],
  templateUrl: './info-about-us.component.html',
  styleUrls: ['./info-about-us.component.css']
})
export class InfoAboutUsComponent { 
  infoData = [
    {
      titleDescription: 'Expertos en soluciones de Alto Impacto',
      description: 'Somos una empresa joven, con ganas y experiencia de profesionales con más de 10 años en el mercado de servicios de tecnología y Sistemas de información, contamos con la participación en proyectos de alto impacto, desarrollamos soluciones de TI aplicadas en sectores como comunicaciones, transporte, comercio, logística, solidario, salud, legal y servicios.'
    }
    
  ];
  cardsData1 = [
    {
      titleCard: 'Mejorar',
      descriptionCard: 'Modernización de aplicaciones existentes.'
    }
  ];
  cardsData2 = [
    {
      titleCard: 'Diseñar y Mejorar',
      descriptionCard: 'Diseño y desarrollo de aplicaciones Web y Desktop, configurables, escalables y seguras.'
    }
  ];
  cardsData3 = [
    {
      titleCard: 'Mantener y Soportar',
      descriptionCard: 'Integración de aplicaciones y servicios.'
    }
  ]
}
