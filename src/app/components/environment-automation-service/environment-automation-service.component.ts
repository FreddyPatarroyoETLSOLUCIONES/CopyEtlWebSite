import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../items/services/services.component';
import { QuestionComponent } from './question/question.component';
import { NumbersComponent } from './numbers/numbers.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Text } from '../../models/texts';

@Component({
  selector: 'app-environment-automation-service',
  imports: [ServicesComponent, QuestionComponent, NumbersComponent, AccordionComponent],
  templateUrl: './environment-automation-service.component.html',
  styleUrl: './environment-automation-service.component.css'
})
export class EnvironmentAutomationServiceComponent implements OnInit{
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
  titleQuestion!: string;
  textQuestion!: string;
  itemsQuestion!: any[];
  imageQuestion!: string;
  titleNumbers!: string;
  textNumber!: string;
  itemsNumber!: any[];
  titleAccordion!: string;
  textAccordion!: string;
  imgAccordion!: string;
  itemsAccordion!: any[];

  ngOnInit(): void {
    this.title = Text.Service.EnvironmentAutomation.Title.Title;
    this.subTitle = Text.Service.EnvironmentAutomation.Title.Text;
    this.imageTitle = Text.Service.EnvironmentAutomation.Title.Img;
    this.titleDescription = Text.Service.EnvironmentAutomation.Description.Title;
    this.description = Text.Service.EnvironmentAutomation.Description.Text1;
    this.image = Text.Service.EnvironmentAutomation.Description.Img;
    this.subTitleDescription = Text.Service.EnvironmentAutomation.Description.SubTitle;
    this.subDescription = Text.Service.EnvironmentAutomation.Description.Text2;
    this.titleContact = Text.Service.EnvironmentAutomation.Contact.Title;
    this.textContact = Text.Service.EnvironmentAutomation.Contact.Text;
    this.imageContact = Text.Service.EnvironmentAutomation.Contact.Img;
    this.titleQuestion = Text.Service.EnvironmentAutomation.Question.Title;
    this.textQuestion = Text.Service.EnvironmentAutomation.Question.Text;
    this.itemsQuestion = Text.Service.EnvironmentAutomation.Question.Items;
    this.imageQuestion = Text.Service.EnvironmentAutomation.Question.Img;
    this.titleNumbers = Text.Service.EnvironmentAutomation.Numbers.Title;
    this.textNumber = Text.Service.EnvironmentAutomation.Numbers.Text;
    this.itemsNumber = Text.Service.EnvironmentAutomation.Numbers.Items;
    this.titleAccordion = Text.Service.EnvironmentAutomation.Accordion.Title;
    this.textAccordion = Text.Service.EnvironmentAutomation.Accordion.Text;
    this.imgAccordion = Text.Service.EnvironmentAutomation.Accordion.Img;
    this.itemsAccordion = Text.Service.EnvironmentAutomation.Accordion.Items;
  }
  
}
