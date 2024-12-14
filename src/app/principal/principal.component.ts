import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-principal',
  imports: [WelcomeComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
