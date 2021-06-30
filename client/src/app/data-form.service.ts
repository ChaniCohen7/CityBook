import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from "./User";
import { Kid } from './Kid';

@Injectable({providedIn: 'root'})
 

export class DataFormService {
  displayUser:User={
    FirstName:'',
      LastName:'',
      TZ:'',
      BornDate:new Date,
      Genus:'',
      HMO:'',
      
  };
  constructor(private http: HttpClient) { }
  getDisplayUser(){
    return this.displayUser;
  }
  udeteDisplayUser(user:User){
    this.displayUser.Genus=user.Genus;
    this.displayUser.HMO=user.HMO;
    this.displayUser.BornDate=user.BornDate;
    this.displayUser.FirstName=user.FirstName
    this.displayUser.LastName=user.LastName;
  }
  public name:string | undefined;
  addUser(user: User): Observable<any> {
    this.giveNameByUser(user);
  
    return this.http.post("http://localhost:57854/api/UserRegistration/Register",user);
      
    
  }
  addKid(kid: Kid): Observable<any> {
    
    return this.http.post("http://localhost:57854/api/KidRegistration/Register",kid);
  }
  giveName(){
    return this.name;
  }
  giveNameByUser(user:User){
    this.name=user.FirstName +' '+user.LastName;
  }

 
}
