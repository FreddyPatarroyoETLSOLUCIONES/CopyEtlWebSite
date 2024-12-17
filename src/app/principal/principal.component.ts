import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-principal',
  imports: [
    WelcomeComponent,
    CarouselComponent,
    ProductsComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
