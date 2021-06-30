import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import{DataFormService}from'../data-form.service'
import { Kid } from '../Kid';
@Component({
  selector: 'app-kid-component',
  templateUrl: './kid-component.component.html',
  styleUrls: ['./kid-component.component.css']
})
export class KidComponentComponent {
    addressForm = this.fb.group({
    company: null,
    fullName: [ '',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]],
    TZ: [ '',
    [
      Validators.required,
      Validators.maxLength(9),
      Validators.minLength(9),
      Validators.pattern('^[0-9 ]*$')
    ]],
    DadTZ: [ '',
    [
      Validators.required,
      Validators.maxLength(9),
      Validators.minLength(9),
      Validators.pattern('^[0-9 ]*$')
    ]],
    Date: [null, Validators.required],
  });

  hasUnitNumber = false;
  
   newKid:Kid={
    FullName:'',
    BornDate:new Date(),
    TZ:'',
    DadTZ:'',
  }
  

  DadTZ:any;//for store the tz from the localStorage
  constructor(private fb: FormBuilder,private dataFormService:DataFormService ) {}

  ngOnInit(){
      this.DadTZ=localStorage.getItem('TZ');
      this.newKid.DadTZ=this.DadTZ;
      this.newKid.FullName=localStorage.getItem('kidFullName')||'';
      this.newKid.TZ=localStorage.getItem('KidTZ')||'';
      this.newKid.BornDate=new Date(localStorage.getItem('kidBornDate')||'');
  }
  
 ngOnDestroy(){
    localStorage.setItem('kidFullName',this.newKid.FullName);
    localStorage.setItem('KidTZ',this.newKid.TZ);
    localStorage.setItem('kidBornDate',this.newKid.BornDate.toString());
 }
  
  onSubmit(): void {
    
  }

  addKid():void{
         if(this.newKid.FullName=='')
          this.hasUnitNumber = !this.hasUnitNumber;
        this.dataFormService.addKid(this.newKid).subscribe();
        this.addKidForm()
      }
  addKidForm(){
   
    this.hasUnitNumber = !this.hasUnitNumber;
  }
}
