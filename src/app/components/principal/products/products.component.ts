import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Text } from '../../../models/texts';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products!:any[];
  title!:string;
  text!:string;
  
  elementProduct1!:any;
  elementProduct2!:any;
  elementProduct3!:any;
  elementProduct4!:any;
  
  ngOnInit(): void {
    this.title = Text.Principal.Products.Title1;
    this.text = Text.Principal.Products.Text1;
    this.products = Text.Principal.Products.ProductsList;
    
    if(typeof document !== 'undefined'){
      this.elementProduct1 = document.getElementById('product1');
      this.elementProduct2 = document.getElementById('product2');
      this.elementProduct3 = document.getElementById('product3');
      this.elementProduct4 = document.getElementById('product4');
    }
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
