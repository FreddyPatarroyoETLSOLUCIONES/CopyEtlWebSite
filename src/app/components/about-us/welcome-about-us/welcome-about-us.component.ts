import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-about-us',
  imports: [CommonModule],
  templateUrl: './welcome-about-us.component.html',
  styleUrls: ['./welcome-about-us.component.css']
})
export class WelcomeAboutUsComponent {
  bannerData = [
    {
      title: 'ETL SOLUCIONES',
      subTitle: 'Nuestra Empresa',
      imageTitle: './assets/wallpapers/image_aboutUs.jpg'
    }
  ];
}
