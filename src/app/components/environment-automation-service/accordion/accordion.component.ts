import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  title = 'Apoyo Completo en';
  highlight = 'Documentación y Capacitación';
  description = `
    Nos aseguramos de que todo el proceso y las configuraciones queden documentados 
    de manera clara y concisa. Además, capacitamos a tu equipo en el uso de herramientas y procesos, 
    garantizando una fácil adopción y mantenimiento del sistema.
  `;

  tabs = [
    { title: 'Accesibilidad', content: 'Texto relacionado con la accesibilidad.' },
    { title: 'Practicidad', content: 'Texto relacionado con la practicidad.' },
    { title: 'Visualización', content: 'Texto relacionado con la visualización.' },
    { title: 'Refuerzo', content: 'Texto relacionado con el refuerzo.' }
  ];
}