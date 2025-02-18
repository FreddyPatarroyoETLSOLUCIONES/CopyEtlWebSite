import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  
  @Input() titleContact!:string;
  @Input() textContact!:string;
  @Input() imageContact!:string;
  
  ngOnInit(): void {
  }
}
