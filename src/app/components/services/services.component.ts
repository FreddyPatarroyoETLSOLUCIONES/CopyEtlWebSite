import { Component } from '@angular/core';
import { TitleServiceComponent } from './title-service/title-service.component';
import { DescriptionComponent } from './description/description.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-services',
  imports: [
    TitleServiceComponent,
    DescriptionComponent,
    ContactComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
