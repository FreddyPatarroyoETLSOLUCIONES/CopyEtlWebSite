import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Text } from '../../../models/texts';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  host: { ngSkipHydration: 'true' },
})
export class CarouselComponent implements OnInit{
  servicios!: any[];
  //responsiveOptions: any[];
  
  ngOnInit(): void {
    this.servicios = Text.Principal.Services.ServicesList;
  }
}