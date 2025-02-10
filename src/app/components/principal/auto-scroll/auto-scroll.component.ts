import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-scroll.component.html',
  styleUrls: ['./auto-scroll.component.css']
})
export class AutoScrollComponent implements OnInit {
  
  clients: string[] = [
    'client_1.png', 'client_2.png', 'client_3.png', 'client_4.png',
    'client_5.png', 'client_6.png', 'client_7.png', 'client_8.png',
    'client_9.png', 'client_10.png', 'client_11.png', 'client_12.png',
    'client_13.png', 'client_14.png', 'client_15.png', 'client_16.png',
    'client_17.png', 'client_18.png', 'client_19.png'
  ];

  darkClients: string[] = this.clients.map(client => client.replace('.png', '_dark.png'));

  ngOnInit(): void {
    this.updateTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => this.updateTheme());
  }

  updateTheme(): void {
    const lightTheme = document.querySelector('.logos.light_theme') as HTMLElement;
    const darkTheme = document.querySelector('.logos.dark_theme') as HTMLElement;
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      lightTheme.style.display = 'none';
      darkTheme.style.display = 'flex';
    } else {
      lightTheme.style.display = 'flex';
      darkTheme.style.display = 'none';
    }
  }
}
