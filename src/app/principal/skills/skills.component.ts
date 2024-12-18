import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills:string [] = [
    'Manejo de Solicitudes de desarrollo.',
    'Liderazgo del proyecto end to end.',
    'Gestión de Solicitudes: Incidencias, requerimientos y proyectos.',
    'Construcción y liberación con “victorias tempranas”.',
    'Piezas de software solventes, autónomas y de valor para el negocio.',
    'Análisis de las inquietudes del negocios para traducirlas en iniciativas de tecnología de rápida y solvente aplicación.'
  ]

}
