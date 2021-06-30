import { Component, OnInit } from '@angular/core';
import{DataFormService}from'../data-form.service'
import { UsercomponentComponent } from '../usercomponent/usercomponent.component';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {


constructor(private dataFormService:DataFormService) { }
   name= this.dataFormService.giveName();
  
  ngOnInit(): void {
  }

}
