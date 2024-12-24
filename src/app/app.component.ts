import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NabvarComponent,
    PrincipalComponent,
    FooterComponent,
    ServicesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EtlWebSite';
  userInput: string = '';
}
