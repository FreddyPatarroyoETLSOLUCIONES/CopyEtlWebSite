import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  imports: [RouterModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  menuItems = [];
}