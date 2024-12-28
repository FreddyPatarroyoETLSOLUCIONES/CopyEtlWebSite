import { Component } from '@angular/core';
import { WelcomeAboutUsComponent } from './welcome-about-us/welcome-about-us.component';
import { CounterComponent } from '../principal/counter/counter.component';
import { AbilityComponent } from './ability/ability.component';

@Component({
  selector: 'app-about-us',
  imports: [WelcomeAboutUsComponent, CounterComponent, AbilityComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
