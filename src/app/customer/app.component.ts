import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{EmployeeModel} from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})


export class customerComponent {
 Employeeobj: EmployeeModel= null;
  
  title = 'myfirstapp';
 constructor(public httpobj:HttpClient){
   this.Employeeobj =new EmployeeModel() ;
 }
  Submit(){
   //http post submit 
 
 //Take this Employeeobj and make http call
 this.httpobj.post("https://localhost:44304/Employee/Submit", this.Employeeobj).subscribe(res=>this.Success(res),
 res=>Error(res));
  }
  Success(res){

  }
  Error(res){

  }
}
