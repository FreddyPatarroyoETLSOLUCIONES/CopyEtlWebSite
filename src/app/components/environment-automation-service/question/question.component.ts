import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  benefits = [
    {
      title: 'Consistencia y eficiencia',
      description: 'Minimiza errores y asegura que los entornos de prueba se configuren de manera uniforme.'
    },
    {
      title: 'Reducción de costos y tiempos',
      description: 'Menos tareas manuales, más tiempo para tareas estratégicas.'
    },
    {
      title: 'Escalabilidad',
      description: 'Crea y gestiona nuevos entornos rápidamente, adaptándose a las necesidades de tus proyectos.'
    },
    {
      title: 'Control de versiones',
      description: 'Rastrea cambios y mantiene coherencia en cada entorno.'
    }
  ];
}
