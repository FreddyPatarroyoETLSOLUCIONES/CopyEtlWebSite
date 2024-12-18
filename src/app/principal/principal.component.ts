import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-principal',
  imports: [
    WelcomeComponent,
    CarouselComponent,
    ProductsComponent,
    SkillsComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
