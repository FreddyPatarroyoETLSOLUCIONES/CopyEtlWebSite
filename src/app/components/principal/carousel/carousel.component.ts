import { Component, OnInit } from '@angular/core';
import { Text } from '../../../models/texts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
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