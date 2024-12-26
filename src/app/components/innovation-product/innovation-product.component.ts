import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../../items/products/products.component';

@Component({
  selector: 'app-innovation-product',
  imports: [ProductsComponent],
  templateUrl: './innovation-product.component.html',
  styleUrl: './innovation-product.component.css'
})
export class InnovationProductComponent implements OnInit{
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
    this.subTitle = 'Productos de mayor interés o necesidad';
    this.imageTitle = './assets/wallpapers/wallp_innovation_p.png';
    this.titleDescription = 'Análisis y Comportamiento de Mercados';
    this.description = 'Identificación de las preferencias individuales de sus clientes con máximo detalle, le sugerirá en base a éstas qué productos pueden resultar de mayor interés o necesidad para cada cliente.';
    this.image = './assets/images/innovation_right.png';
    this.subTitleDescription = '¿En que consiste?';
    this.subDescription = `<p>Los departamentos de TI han evolucionado con el tiempo, ahora se han vuelto un bien indispensable para las empresas al momento de cambios y soluciones innovadoras, transformando a los negocios y haciendo más notable su presencia en el mercado.</p> 
                            </br> 
                            <p>Consúltanos ahora y encuentra las soluciones ideales para tu empresa. En ETL Soluciones, estamos para servirte.</p>`;
    this.imageContact = './assets/wallpapers/contact_innovation_p.png';
  }
}
