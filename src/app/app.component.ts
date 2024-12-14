import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from './nabvar/nabvar.component'; 
import { PrincipalComponent } from './principal/principal.component';

@Component({
  selector: 'app-root',
  imports: [
    NabvarComponent,
    PrincipalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EtlWebSite';
}
