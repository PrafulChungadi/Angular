
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS,  } from '@angular/common/http';
import { employeesearchcomponent } from './app.employeesearchcomponent';
import { employeesearchrouting } from './app.employeesearchrouting';
import { CommonModule } from '@angular/common';
import { MyJwtInterceptor } from '../Utilities/Utility.Interceptor';

@NgModule({
  declarations: [ 
  employeesearchcomponent
  ],
  imports: [
    RouterModule.forChild(employeesearchrouting),ReactiveFormsModule,
    FormsModule,
   CommonModule,
   HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyJwtInterceptor, multi: true}],
  bootstrap: [employeesearchcomponent]
})
export class searchModule { }
