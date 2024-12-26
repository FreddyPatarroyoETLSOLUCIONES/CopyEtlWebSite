import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';

@Component({
  selector: 'app-consulting-service',
  imports: [ServicesComponent],
  templateUrl: './consulting-service.component.html',
  styleUrl: './consulting-service.component.css'
})
export class ConsultingServiceComponent implements OnInit{
  
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
    this.title = 'Consultoría';
    this.subTitle = 'Mayor retorno a su Negocio';
    this.imageTitle = './assets/wallpapers/wallp_consultoria.jpg';
    this.titleDescription = 'Asesorías Integrales';
    this.description = 'Servicios de asesoría integral en gestión de procesos para garantizar que las soluciones tecnológicas de su organización son mayor retorno posible a su negocio.';
    this.image = './assets/images/consultoria_left.png';
    this.subTitleDescription = '¿En qué consiste?';
    this.subDescription = '<p>Consisten en un servicio de asesoría especializada e independiente al que recurren las empresas en diferentes industrias con el fin de encontrar, soluciones a uno o más problemas y/o mejoras de negocio. </p> </br> <p>Nuestros servicios de consultoría son parte de las grandes soluciones que te ofrece ETL. </p> </br> <p>Las consultorías consisten en un servicio de asesoría especializada e independiente al que recurren las empresas en diferentes industrias con el fin de encontrar, soluciones a uno o más problemas y/o mejoras de negocio. Por esto, nuestros servicios de consultoría son parte de las grandes soluciones que te ofrece ETL. </p>';
    this.imageContact = './assets/wallpapers/contact_consultoria.jpg';
  }
}
