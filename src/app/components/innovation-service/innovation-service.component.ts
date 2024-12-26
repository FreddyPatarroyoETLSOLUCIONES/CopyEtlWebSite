import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';

@Component({
  selector: 'app-innovation-service',
  imports: [ServicesComponent],
  templateUrl: './innovation-service.component.html',
  styleUrl: './innovation-service.component.css'
})
export class InnovationServiceComponent implements OnInit{
  title!: string;
  subTitle!:string;
  imageTitle!:string;
  titleDescription!:string;
  description!:string;
  image!:string;
  subTitleDescription!:string;
  subDescription!:string;
  imageContact!:string;
  
  ngOnInit(): void {
    this.title = 'Innovación';
    this.subTitle = 'Identificando la raíz de cada problema';
    this.imageTitle = './assets/wallpapers/wallp_innovation.png';
    this.titleDescription = 'Reingeniería, Analítica, Gestión y Procedimientos de Datos';
    this.description = 'Servicios de incluyen procesos de reingeniería, analítica, gestión, y procedimientos de datos para identificar causa raíz de problemas en una organización que sean solucionables mediante el uso de tecnología.';
    this.image = './assets/images/innovation_left.png';
    this.subTitleDescription = '¿En qué consiste?';
    this.subDescription = '<p>A pesar de que la palabra innovación se enfoca en la novedad, se relaciona de igual manera con mejorar y potenciar áreas ya establecidas, ya sean productos servicios o sistemas. </p> </br> <p>En ETL nos encargamos de impulsar a tu empresa a través de diferentes soluciones digitales. </p> </br> <p>Consúltanos ahora. </p>';
    this.imageContact = './assets/wallpapers/contact_innovation.png';
  }
}
