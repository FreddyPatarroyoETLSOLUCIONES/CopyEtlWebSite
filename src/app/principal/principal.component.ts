import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-principal',
  imports: [
    WelcomeComponent,
    CarouselComponent,
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
