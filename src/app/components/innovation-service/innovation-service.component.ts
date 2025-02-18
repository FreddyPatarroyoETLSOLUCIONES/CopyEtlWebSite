import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';
import { Text } from '../../models/texts';

@Component({
  selector: 'app-innovation-service',
  imports: [ServicesComponent],
  templateUrl: './innovation-service.component.html',
  styleUrl: './innovation-service.component.css'
})
export class InnovationServiceComponent implements OnInit{
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
    this.title = Text.Service.Innovation.Title.Title;
    this.subTitle = Text.Service.Innovation.Title.Text;
    this.imageTitle = Text.Service.Innovation.Title.Img;
    this.titleDescription = Text.Service.Innovation.Description.Title;
    this.description = Text.Service.Innovation.Description.Text1;
    this.image = Text.Service.Innovation.Description.Img;
    this.subTitleDescription = Text.Service.Innovation.Description.SubTitle;
    this.subDescription = Text.Service.Innovation.Description.Text2;
    this.titleContact = Text.Service.Innovation.Contact.Title;
    this.textContact = Text.Service.Innovation.Contact.Text;
    this.imageContact = Text.Service.Innovation.Contact.Img;
  }
}
