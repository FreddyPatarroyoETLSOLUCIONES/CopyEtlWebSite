import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';
import { CommonModule } from '@angular/common';
import { Text } from '../../models/texts';

@Component({
  selector: 'app-bpo-service',
  imports: [
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './bpo-service.component.html',
  styleUrl: './bpo-service.component.css'
})
export class BpoServiceComponent implements OnInit{
  
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
    this.title = Text.Service.BPO.Title.Title;
    this.subTitle = Text.Service.BPO.Title.Text;
    this.imageTitle = Text.Service.BPO.Title.Img;
    this.titleDescription = Text.Service.BPO.Description.Title;
    this.description = Text.Service.BPO.Description.Text1;
    this.image = Text.Service.BPO.Description.Img;
    this.subTitleDescription = Text.Service.BPO.Description.SubTitle;
    this.subDescription = Text.Service.BPO.Description.Text2;
    this.titleContact = Text.Service.BPO.Contact.Title;
    this.textContact = Text.Service.BPO.Contact.Text;
    this.imageContact = Text.Service.BPO.Contact.Img;
  }
}
