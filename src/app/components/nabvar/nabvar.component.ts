import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Text } from '../../models/texts';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nabvar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent implements OnInit{

  menuItems: any = [];
  menuOpen: boolean = false;
  subMenus: boolean[] = [];
  isDarkMode: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = Text.Nabvar.Menu;
    this.subMenus = new Array(this.menuItems.length).fill(false);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.subMenus.fill(false);
  }

  toggleSubMenu(event: Event, index: number): void {
    event.preventDefault();
    this.subMenus[index] = !this.subMenus[index];
  }

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}