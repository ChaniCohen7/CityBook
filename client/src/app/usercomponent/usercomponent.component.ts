import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {User} from '../User';
import{DataFormService}from'../data-form.service'

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
 
  
  constructor(private fb: FormBuilder,private dataFormService:DataFormService) {}
  ngOnInit(){
      this.newUser.FirstName=localStorage.getItem('firstName')||''
      this.newUser.LastName=localStorage.getItem('lastName')||'';
      this.newUser.TZ=localStorage.getItem('TZ')||'';
      this.newUser.HMO=localStorage.getItem('HMO')||'';
      this.newUser.Genus=localStorage.getItem('Genus')||'';
      this.newUser.BornDate=new Date(localStorage.getItem('BornDate')||'');
      // localStorage.setItem('TZ','-1');
  }
  
 ngOnDestroy(){
    localStorage.setItem('firstName',this.newUser.FirstName);
    localStorage.setItem('lastName',this.newUser.LastName);
    localStorage.setItem('TZ',this.newUser.TZ);
    localStorage.setItem('HMO',this.newUser.HMO);
    localStorage.setItem('Genus',this.newUser.Genus);
    localStorage.setItem('BornDate',this.newUser.BornDate.toString());

 }
  onSubmit(): void {
   
    this.dataFormService.addUser(this.newUser).subscribe();
  }
 
  saveTZ(){
   localStorage.setItem('TZ',this.newUser.TZ);
  }

  addKids(){
    if(localStorage.getItem('TZ')=="-1")
    alert("You Must Enter Your ID Number For Adding  Children");
    else
    this.hasUnitNumber=!this.hasUnitNumber;
  }
}
