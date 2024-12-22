import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Text } from '../../../models/texts';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  skills!:string [];
  title!:string;
  
  ngOnInit(): void {
    this.title = Text.Principal.Skills.Title1;
    this.skills = Text.Principal.Skills.SkillsList;
  }
}
