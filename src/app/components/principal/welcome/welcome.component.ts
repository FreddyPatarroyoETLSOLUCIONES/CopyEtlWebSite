import { Component, OnInit } from '@angular/core';
import { Text } from '../../../models/texts';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  Title!:string;
  SubTitle!:string;
  Text!:string;
  
  ngOnInit(): void {
    this.Title = Text.Principal.Welcome.Title1;
    this.SubTitle = Text.Principal.Welcome.Subtitle1;
    this.Text = Text.Principal.Welcome.Text1;
  }
}
