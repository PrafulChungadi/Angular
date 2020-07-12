
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { employeeComponent } from './app.employeecomponent';
import { employeerouting } from './app.employeerouting';
import { CommonModule } from '@angular/common';
import { MyJwtInterceptor } from '../Utilities/Utility.Interceptor';



import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material';
  

@NgModule({ 
  declarations: [
  employeeComponent,
  ],
  imports: [
    RouterModule.forChild(employeerouting),ReactiveFormsModule,
    FormsModule,  MatSortModule,
    MatTableModule,
   CommonModule,
   HttpClientModule
  ],

  
    


  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyJwtInterceptor, multi: true}],
  bootstrap: [employeeComponent]
})
export class employeeModule {  }
