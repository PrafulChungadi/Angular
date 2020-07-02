import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './app.LoginPageModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.LoginPage.html',

})


export class EmployeeLoginePageComponent {
 UserObj:User=new User();
 constructor(public http:HttpClient){

 }
 Login(){
  //  call to mvc core and first get the token
  this.http.post("https://localhost:44304/api/Security",
  this.UserObj).subscribe(res=>this.Success(res),res=>this.Error(res));
 }
 Success(res){
  alert(res.token);
 }
Error(res){

}

}
