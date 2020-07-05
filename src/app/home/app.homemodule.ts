import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { homeComponent } from './app.homecomponent';
import{RouterModule} from '@angular/router'
import { mainrouting } from './app.homerouting';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MasterPageComponent } from './app.MasterPagecomponent';
import { User } from './app.LoginPageModel';
import { SecurityLogic } from '../Utilities/Utility.AuthGuard';
import { EmployeeLoginePageComponent } from './app.LoginPage';
import { MyJwtInterceptor } from '../Utilities/Utility.Interceptor';

@NgModule({
  declarations: [
    homeComponent,MasterPageComponent,EmployeeLoginePageComponent,
  ],
  imports: [
    RouterModule.forRoot(mainrouting),ReactiveFormsModule,
    FormsModule,
    BrowserModule,
   HttpClientModule
  ],
  providers: [User,SecurityLogic,
    {provide: HTTP_INTERCEPTORS, useClass: MyJwtInterceptor, multi: true}],
  bootstrap: [MasterPageComponent]
})
export class homeModule { }
