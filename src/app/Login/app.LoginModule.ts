
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeLoginePageComponent } from './app.LoginPage';
import { Loginpagerouting } from './app.Loginrouting';

@NgModule({
  declarations: [ 
 EmployeeLoginePageComponent,
  ],
  imports: [
    RouterModule.forChild(Loginpagerouting),ReactiveFormsModule,
    FormsModule,
   CommonModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [EmployeeLoginePageComponent]
})
export class loginModule { }
