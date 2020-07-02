import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { homeComponent } from './app.homecomponent';
import{RouterModule} from '@angular/router'
import { mainrouting } from './app.homerouting';
import { HttpClientModule } from '@angular/common/http';

import { MasterPageComponent } from './app.MasterPagecomponent';

@NgModule({
  declarations: [
    homeComponent,MasterPageComponent,
  ],
  imports: [
    RouterModule.forRoot(mainrouting),ReactiveFormsModule,
    FormsModule,
    BrowserModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class homeModule { }
