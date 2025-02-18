import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';
import { Text } from '../../models/texts';

@Component({
  selector: 'app-consulting-service',
  imports: [ServicesComponent],
  templateUrl: './consulting-service.component.html',
  styleUrl: './consulting-service.component.css'
})
export class ConsultingServiceComponent implements OnInit{
  
  title!: string;
  subTitle!:string;
  imageTitle!:string;
  titleDescription!:string;
  description!:string;
  image!:string;
  subTitleDescription!:string;
  subDescription!:string;
  titleContact!:string;
  textContact!:string;
  imageContact!:string;
  
  ngOnInit(): void {
    this.title = Text.Service.Consulting.Title.Title;
    this.subTitle = Text.Service.Consulting.Title.Text;
    this.imageTitle = Text.Service.Consulting.Title.Img;
    this.titleDescription = Text.Service.Consulting.Description.Title;
    this.description = Text.Service.Consulting.Description.Text1;
    this.image = Text.Service.Consulting.Description.Img;
    this.subTitleDescription = Text.Service.Consulting.Description.SubTitle;
    this.subDescription = Text.Service.Consulting.Description.Text2;
    this.titleContact = Text.Service.Consulting.Contact.Title;
    this.textContact = Text.Service.Consulting.Contact.Text;
    this.imageContact = Text.Service.Consulting.Contact.Img;
  }
}
