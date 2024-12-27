import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../../items/products/products.component';

@Component({
  selector: 'app-business-intelligence-product',
  imports: [ProductsComponent],
  templateUrl: './business-intelligence-product.component.html',
  styleUrl: './business-intelligence-product.component.css'
})
export class BusinessIntelligenceProductComponent implements OnInit{
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
    this.title = 'ETL (BI) Business Intelligence';
    this.subTitle = 'En Tiempo Real';
    this.imageTitle = './assets/wallpapers/wallp_bi.png';
    this.titleDescription = 'Análisis y Comportamiento de Mercados';
    this.description = 'Servicios gestionables con herramientas en nube, que permiten visualizar en tiempo real y en términos de negocio, el comportamiento de variables claves para mejorar el proceso de toma de decisiones en una organización.';
    this.image = './assets/images/bi_right.png';
    this.subTitleDescription = '¿En que consiste?';
    this.subDescription = `<p>Conjunto de procesos, aplicaciones y tecnologías que facilitan la obtención de datos, de manera que puedan ser aprovechados para la toma de decisiones.</p> 
                            </br> 
                            <p>A través de esta línea brindamos asesoría a nuestros clientes en el diseño e implementación de procesos, software y tecnología, para gestionar sus datos existentes en múltiples fuentes, convirtiéndolos en información de valor en la compañía.</p>
                            </br> 
                            <p>Consúltanos ahora y dale a tu empresa el impulso que te ofrece ETL Soluciones.</p>`;
    this.imageContact = './assets/wallpapers/contact_bi.png';
  }
}
