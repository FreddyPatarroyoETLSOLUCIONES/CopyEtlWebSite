import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bpo-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './bpo-service.component.html',
  styleUrl: './bpo-service.component.css'
})
export class BpoServiceComponent implements OnInit{
  
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
    this.title = 'BPO';
    this.subTitle = 'Optimizando tiempos de respuesta';
    this.imageTitle = './assets/wallpapers/wallp_bpo.png';
    this.titleDescription = 'Aplicación de técnicas de reingeniería Optimizando tiempos';
    this.description = 'Servicios tercerizados de bajo costo y alta productividad para nuestros clientes, aplicando técnicas de reingeniería para optimizar tiempos de respuesta y generación de mayor valor.';
    this.image = './assets/images/bpo_left.png';
    this.subTitleDescription = '¿En qué consiste?';
    this.subDescription = `<p>Business Process Outsourcing Dentro de los Servicios tercerizados tenemos: </p> 
                            </br>
                            <ul class="list" >
                              <li>Soporte</li>
                              <li>Desarrollo de aplicaciones</li>
                              <li>Gestión de infraestructura TI</li>
                              <li>Adecuación y optimización de centros de datos</li>
                            </ul> 
                            </br>
                            <p>Una de las soluciones que tenemos para ofrecerte, es el outsourcing, que consiste en que una empresa contrata nuestros servicios para hacer algo en lo que dicha empresa no se especializa. </p> 
                            </br> 
                            <p>Esto libera a la primera organización para enfocarse en la función central de su negocio. </p>
                            </br> 
                            <p>Consúltanos ahora. </p>`;
                            
    this.imageContact = './assets/wallpapers/contact_bpo.png';
  }
}
