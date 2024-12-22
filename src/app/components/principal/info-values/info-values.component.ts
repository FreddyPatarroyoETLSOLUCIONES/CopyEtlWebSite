import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { Text } from '../../../models/texts';

@Component({
  selector: 'app-info-values',
  imports: [GalleriaModule],
  templateUrl: './info-values.component.html',
  styleUrl: './info-values.component.css',
  host: { ngSkipHydration: 'true' },
 
})
export class InfoValuesComponent implements OnInit{
  services!:any[];

  ngOnInit(): void {
    this.services = Text.Principal.InfoValues.Services;
  }
}
