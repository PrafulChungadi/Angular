
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { employeeComponent } from './app.employeecomponent';
import { employeerouting } from './app.employeerouting';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
  employeeComponent
  ],
  imports: [
    RouterModule.forChild(employeerouting),ReactiveFormsModule,
    FormsModule,
   CommonModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [employeeComponent]
})
export class employeeModule {  }
