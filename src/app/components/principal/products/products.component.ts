import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  elementProduct1!:any;
  elementProduct2!:any;
  elementProduct3!:any;
  elementProduct4!:any;

  products:any[] = [
    {title: 'Infocusnews', icon: './assets/icons/text.png', text: 'Diario digital que descubre información de valor en su compañía utilizando modelos estadísticos…'},
    {title: 'ETL (BI) Business Intelligence', icon: './assets/icons/db.png', text: 'Servicio de gestión en nube o infraestructura propia del cliente para diseñar…'},
    {title: 'Motor de Sugerencias', icon: './assets/icons/start.png', text: 'El motor de sugerencia mide las preferencias de los clientes a cada una de ellas…'},
    {title: 'Innovación', icon: './assets/icons/podio.png', text: 'Identificación de las preferencias individuales de sus clientes con máximo detalle…'},
  ]
  
  ngOnInit(): void {
    this.elementProduct1 = document.getElementById('product1');
    this.elementProduct2 = document.getElementById('product2');
    this.elementProduct3 = document.getElementById('product3');
    this.elementProduct4 = document.getElementById('product4');
  }
  
  changeHover(index:number ){
    switch (index) {
      case 0:
        this.elementProduct1.classList.add('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
        
      case 1:
          this.elementProduct1.classList.add('active');
          this.elementProduct2.classList.remove('active');
          this.elementProduct3.classList.remove('active');
          this.elementProduct4.classList.remove('active');
          break;  
        
      case 2:
        this.elementProduct2.classList.add('active');
        this.elementProduct1.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
        
      case 3:
        this.elementProduct3.classList.add('active');
        this.elementProduct1.classList.remove('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
        
      case 4:
        this.elementProduct4.classList.add('active');
        this.elementProduct1.classList.remove('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        break;
        
      default:
        this.elementProduct1.classList.add('active');
        this.elementProduct2.classList.remove('active');
        this.elementProduct3.classList.remove('active');
        this.elementProduct4.classList.remove('active');
        break;
    }
    
  }
}
