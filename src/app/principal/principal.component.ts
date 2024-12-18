import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { AutoScrollComponent } from './auto-scroll/auto-scroll.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-principal',
  imports: [
    WelcomeComponent,
    CarouselComponent,
    ProductsComponent,
    AutoScrollComponent,
    CounterComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
