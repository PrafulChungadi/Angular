
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { employeeComponent } from './app.employeecomponent';
import { employeerouting } from './app.employeerouting';
import { CommonModule } from '@angular/common';
import { MyJwtInterceptor } from '../Utilities/Utility.Interceptor';
@NgModule({
  declarations: [
  employeeComponent,
  ],
  imports: [
    RouterModule.forChild(employeerouting),ReactiveFormsModule,
    FormsModule,
   CommonModule,
   HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyJwtInterceptor, multi: true}],
  bootstrap: [employeeComponent]
})
export class employeeModule {  }
