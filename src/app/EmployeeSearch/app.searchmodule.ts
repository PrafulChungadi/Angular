
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { employeesearchcomponent } from './app.employeesearchcomponent';
import { employeesearchrouting } from './app.employeesearchrouting';
import { CommonModule } from '@angular/common';

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
  providers: [],
  bootstrap: [employeesearchcomponent]
})
export class searchModule { }
