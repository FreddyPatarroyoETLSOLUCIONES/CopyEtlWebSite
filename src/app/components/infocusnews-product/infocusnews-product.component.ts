import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../../items/products/products.component';

@Component({
  selector: 'app-infocusnews-product',
  imports: [ProductsComponent],
  templateUrl: './infocusnews-product.component.html',
  styleUrl: './infocusnews-product.component.css'
})
export class InfocusnewsProductComponent implements OnInit{
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
    this.title = 'Infocusnews';
    this.subTitle = 'Modelos estadísticos y de tendencia';
    this.imageTitle = './assets/wallpapers/wallp_infocusnews.png';
    this.titleDescription = 'Información de valor de las compañías';
    this.description = 'Diario digital que descubre información de valor en su compañía utilizando modelos estadísticos y de tendencia sobre múltiples variables. Diseño, implementación, soporte a soluciones de telefonía de última generación con PBX I P.';
    this.image = './assets/images/infocusnews_right.png';
    this.subTitleDescription = '¿En que consiste?';
    this.subDescription = `<p>El análisis de datos y la gestión adecuada de la información son unos componentes decisivos para el crecimiento de una compañía.</p> 
                            </br> 
                            <p>Por eso en ETL Soluciones implementamos innovadores modelos para ello.</p>
                            </br> 
                            <p>¿Qué esperas? Consúltanos.</p>`;
    this.imageContact = './assets/wallpapers/contact_infocusnews.png';
  }
}
