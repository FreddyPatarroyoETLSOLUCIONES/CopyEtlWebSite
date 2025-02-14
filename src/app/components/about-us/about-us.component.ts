import { Component, OnInit } from '@angular/core';
import { WelcomeAboutUsComponent } from './welcome-about-us/welcome-about-us.component';
import { CounterComponent } from '../principal/counter/counter.component';
import { AbilityComponent } from './ability/ability.component';
import { InfoAboutUsComponent } from './info-about-us/info-about-us.component';

@Component({
  selector: 'app-about-us',
  imports: [WelcomeAboutUsComponent, CounterComponent, AbilityComponent, InfoAboutUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      //behavior: "smooth",
    })
  }
}
