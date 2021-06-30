import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {User} from '../User';
import{DataFormService}from'../data-form.service'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
  
})
export class UsercomponentComponent {
    newUser:User ={
      FirstName:'',
      LastName:'',
      TZ:'',
      BornDate:new Date,
      Genus:'',
      HMO:'',
    };
    userDisplay:User ={
      FirstName:'',
      LastName:'',
      TZ:'',
      BornDate:new Date,
      Genus:'',
      HMO:'',
    };
    
    
    
    addressForm = this.fb.group({
    company: null,
    firstName: [ '',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]],
    lastName: [ '',
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
    HMO: [null, Validators.required],
    Date: [null, Validators.required],
    genus: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    segenusx: ['mail', Validators.required]
  });

  hasUnitNumber = false;

   HMO= [
    {name: 'Macaby', abbreviation: 'Macaby'},
    {name: 'Klalit', abbreviation: 'Klalit'},
    {name: 'Meuchedet', abbreviation: 'Meuchedet'},
    {name: 'Leumit', abbreviation: 'Leumit'},
    
  ];
  firstNameToDisplay:any;
  lastNameToDisplay:any;
  TZToDisplay:any;
  HMOToDisplay:any;
  bornDateToDisplay:any;
  bornDate:any;
  gunusToDisplay:any;
  
  constructor(private fb: FormBuilder,private dataFormService:DataFormService) {}
  ngOnInit(){
    
   localStorage.setItem('T.Z.ForKids','-1');
     
      if(localStorage.getItem('firstName'))
      this.firstNameToDisplay=localStorage.getItem('firstName');
      else this.firstNameToDisplay="First Name"
      if(localStorage.getItem('lastName'))
      this.lastNameToDisplay=localStorage.getItem('lastName');
      else this.lastNameToDisplay="Last Name"
      if(localStorage.getItem('TZ'))
      this.TZToDisplay=localStorage.getItem('TZ');
      else this.TZToDisplay="Enter Your Id Number"
      this.HMOToDisplay=localStorage.getItem('HMO');
      this.bornDate=localStorage.getItem('BornDate');
      this.bornDateToDisplay= this.DateParse(this.bornDate);

  }
  
 ngOnDestroy(){
    localStorage.setItem('firstName',this.userDisplay.FirstName);
    localStorage.setItem('lastName',this.userDisplay.LastName);
    localStorage.setItem('TZ',this.userDisplay.TZ);
    localStorage.setItem('HMO',this.userDisplay.HMO);
    localStorage.setItem('BornDate',this.userDisplay.BornDate.toString());

 }
  onSubmit(): void {
   
    this.dataFormService.addUser(this.newUser).subscribe();
  }
  saveTZ(){
   localStorage.setItem('T.Z.ForKids',this.userDisplay.TZ);
   
  }
  DateParse(value: any): Date | null {
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
  addKids(){
    if(localStorage.getItem('T.Z.ForKids')=="-1")
    alert("You Must Enter Your ID Number For Adding  Children");
    else
    this.hasUnitNumber=!this.hasUnitNumber;
  }
}
