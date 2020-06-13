import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { supplierComponent } from './supplier/app.suppliercomponent';
import { homeComponent } from './home/app.homecomponent';
import { employeeComponent } from './employee/app.employeecomponent';
import{RouterModule} from '@angular/router'
import { mainrouting } from './routing/app.routing';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    supplierComponent,homeComponent,employeeComponent
  ],
  imports: [
    RouterModule.forRoot(mainrouting),
    FormsModule,
    BrowserModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [homeComponent]
})
export class AppModule { }
