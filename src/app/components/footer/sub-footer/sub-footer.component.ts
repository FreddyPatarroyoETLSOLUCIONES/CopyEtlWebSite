import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  imports: [CommonModule],
  templateUrl: './sub-footer.component.html',
  styleUrl: './sub-footer.component.css'
})
export class SubFooterComponent implements OnInit{

  socialNetworks: any = [
    {name: 'Facebook', Url: 'https://www.facebook.com/', img: './assets/socialNetworks/facebook.png'},
    {name: 'Instagram', Url: 'https://www.instagram.com/', img: './assets/socialNetworks/instagram.png'},
    {name: 'Linkedin', Url: 'https://co.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F', img: './assets/socialNetworks/linkedin.png'}
  ]

  menuFooter: string[] = [
    'Inicio',
    'Servicio',
    'Productos',
    'Nosotros'
  ]
  
  ngOnInit(): void {
  }
  
}
