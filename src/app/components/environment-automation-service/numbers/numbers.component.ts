import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent implements OnInit{

  @Input() title!: string;
  @Input() text!: string;
  @Input() steps!: any[];

  // steps = [
  //   {
  //     number: '1',
  //     title: 'Evaluación de Requisitos',
  //     description: 'Identificamos los entornos necesarios y las herramientas más adecuadas para cada proyecto.'
  //   },
  //   {
  //     number: '2',
  //     title: 'Selección de Herramientas',
  //     description: 'Utilizamos tecnologías avanzadas como Docker, Kubernetes y Terraform para optimizar cada entorno.'
  //   },
  //   {
  //     number: '3',
  //     title: 'Definición de Arquitectura',
  //     description: 'Diseñamos la infraestructura ideal de QA, asegurando servidores, bases de datos y servicios confiables.'
  //   },
  //   {
  //     number: '4',
  //     title: 'Configuración Automatizada',
  //     description: 'Implementamos CI/CD para la automatización, agilizando la creación y configuración de pruebas.'
  //   }
  // ];

  ngOnInit(): void {
    
  }
}
