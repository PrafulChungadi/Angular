import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{EmployeeModel} from './app.employeemodel';
@Component({
  selector: 'app-root',
  templateUrl: './app.employeecomponent.html',

})


export class employeeComponent {
  Employeeobj: EmployeeModel= null;
  Employeeobjs:Array<EmployeeModel>=new Array<EmployeeModel>();

  title = 'myfirstapp';
 constructor(public httpobj:HttpClient){
   this.Employeeobj =new EmployeeModel(); //single record
 }
 
  Submit(){
   //http post submit 
 
 //Take this Employeeobj and make http call
 this.httpobj.post("https://localhost:44304/Employee/Submit", this.Employeeobj).subscribe(res=>this.Success(res),
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
