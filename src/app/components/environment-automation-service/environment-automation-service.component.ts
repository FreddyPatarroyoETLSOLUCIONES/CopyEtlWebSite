import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';
import { QuestionComponent } from './question/question.component';
import { NumbersComponent } from './numbers/numbers.component';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-environment-automation-service',
  imports: [ServicesComponent, QuestionComponent, NumbersComponent, AccordionComponent],
  templateUrl: './environment-automation-service.component.html',
  styleUrl: './environment-automation-service.component.css'
})
export class EnvironmentAutomationServiceComponent implements OnInit{
  title!: string;
  subTitle!:string;
  imageTitle!:string;
  titleDescription!:string;
  description!:string;
  image!:string;
  subTitleDescription!:string;
  subDescription!:string;
  imageContact!:string;

  ngOnInit(): void {
    this.title = 'Automatización de la Gestión de Ambientes de QA';
    this.subTitle = 'Optimiza y simplifica tus entornos de prueba';
    this.imageTitle = './assets/wallpapers/wallp_qa.png';
    this.titleDescription = 'Lorem ipsum dolor';
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.image = './assets/images/qa_left.png';
    this.subTitleDescription = '¿En qué consiste?';
    this.subDescription = `<p>La automatización en ambientes de QA (Quality Assurance) permite reducir tareas manuales, mejorar la consistencia en los entornos y maximizar el tiempo que los equipos dedican a la creación de valor.  </p> 
                            </br> 
                            <p>Con nuestra solución, podrás optimizar la gestión y configuración de tus entornos de prueba de manera ágil y escalable. </p>`;
    this.imageContact = './assets/wallpapers/contact_qa.png';
  }
  
}
