import { Component } from '@angular/core';
import { EmployeeModel } from './app.employeemodel';
import{HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.employeesearchcomponent.html',
  
  })
  
  
  export class employeesearchcomponent {
  employeeName:string="";
  employeeobj: EmployeeModel= null;
  employeeModels:Array<EmployeeModel> =new Array<EmployeeModel>();

    constructor(public http:HttpClient){
        
    }

    search(){
        this.http.get("https://localhost:44304/api/employe?employeeName="+ this.employeeName)
        .subscribe(res=>this.success(res),res=>this.error(res));
    }
    success(res){
        this.employeeModels=res;
      
    }
    error(res){

    }
   
   
}