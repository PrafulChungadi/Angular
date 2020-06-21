import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{EmployeeModel} from './app.employeemodel';
import { employeesearchcomponent } from './app.employeesearchcomponent';
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
var empdto :any ={}; //data transfer object
empdto.name =this.Employeeobj.name;
empdto.id = this.Employeeobj.id;

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
