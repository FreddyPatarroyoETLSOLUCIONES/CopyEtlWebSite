import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Text } from '../../models/texts';

@Component({
  selector: 'app-nabvar',
  imports: [RouterModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent implements OnInit{

  menuItems:any = [];

  ngOnInit(): void {
    this.menuItems = Text.Nabvar.Menu;
  }


  scrollToContact(): void {
    const carouselElement = document.getElementById('contact');
    if (carouselElement) {
      carouselElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}