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
  displayKid:Kid={
    FullName:'',
    BornDate:new Date(),
    TZ:'',
    DadTZ:'',
  }
 
  fullNameToDisplay:any;
  bornDate:any;
  bornDateToDisplay:any;
  TZToDisplay:any;
  DadTZ:any;//for store the tz from the localStorage
  constructor(private fb: FormBuilder,private dataFormService:DataFormService ) {}
  ngOnInit(){
      this.DadTZ=localStorage.getItem('T.Z.ForKids')=='';
      this.newKid.DadTZ=this.DadTZ;
      this.fullNameToDisplay=localStorage.getItem('kidFullName');
      this.TZToDisplay=localStorage.getItem('KidTZ');
      this.bornDate=localStorage.getItem('kidBornDate');
      this.bornDateToDisplay= this.parseDate(this.bornDate);
      if(localStorage.getItem('kidFullName'))
      this.fullNameToDisplay=localStorage.getItem('kidFullName');
      else this.fullNameToDisplay="Full Name"
      if(localStorage.getItem('KidTZ'))
      this.TZToDisplay=localStorage.getItem('KidTZ');
      else this.fullNameToDisplay="Enter Your Id Number"
  }
  
 ngOnDestroy(){
    localStorage.setItem('kidFullName',this.displayKid.FullName);
    localStorage.setItem('KidTZ',this.displayKid.TZ);
    localStorage.setItem('kidBornDate',this.displayKid.BornDate.toString());
 }
  
  onSubmit(): void {
    
  }
 
  parseDate(value: any): Date | null {
    if ((typeof value === 'string') && (value.includes('/'))) {
      const str = value.split('/');

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);

      return new Date(year, month, date);
    } else if((typeof value === 'string') && value === '') {
      return new Date();
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
  addKid():void{
         if(this.newKid.FullName=='')
          this.hasUnitNumber = !this.hasUnitNumber;
        this.dataFormService.addKid(this.newKid).subscribe();
  }
  addKidForm(){
   
    this.hasUnitNumber = !this.hasUnitNumber;
  }
}
