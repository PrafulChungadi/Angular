import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{EmployeeModel, EmployeeAddress} from './app.employeemodel';
import { employeesearchcomponent } from '../EmployeeSearch/app.employeesearchcomponent';

import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
   selector: 'app-root',
  templateUrl: './app.employeecomponent.html',

})


export class employeeComponent {

  Employeeobj: EmployeeModel= null;
  employeeAddress:EmployeeAddress=new EmployeeAddress();
  Employeeobjs:Array<EmployeeModel>=new Array<EmployeeModel>();

  title = 'myfirstapp';
 constructor(public httpobj:HttpClient){
   this.Employeeobj =new EmployeeModel(); //single record
 }
 AddAddress(){
  this.Employeeobj.employeeAddresses.push(this.employeeAddress);
  this.employeeAddress = new EmployeeAddress();
}
 
  Submit(){
var empdto :any ={}; //data transfer object
empdto.id = this.Employeeobj.id;
empdto.name =this.Employeeobj.name;
empdto.addresses =[];
empdto.addresses =this.Employeeobj.employeeAddresses;

   //http post submit 
 
 //Take this Employeeobj and make http call
 this.httpobj.post("https://localhost:44304/api/employe",empdto).subscribe(res=>this.Success(res),
 res=>Error(res));
  }
  Success(res){
this.Employeeobjs= res;//set the collection
this.Employeeobj =new EmployeeModel();   //clear ui
  }
  Error(res){
alert(res);
  }
}
