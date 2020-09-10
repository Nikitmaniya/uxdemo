import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApiService}  from './api.service';
import {RouterModule, Router} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { DemoComponent } from './header/demo/demo.component';
import { PriceComponent } from './header/price/price.component';
import { ErrorComponent } from './header/error/error.component';
import { LaptopComponent } from './laptop/laptop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    PriceComponent,
    HeaderComponent,
    LaptopComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([
      {path:"", redirectTo:"", pathMatch:"full"},
      {path:"home", component:HomeComponent},
      {path:"demo", component:DemoComponent},
      {path:"price", children:[
        {path:"", component:PriceComponent},
        {path:"laptop", component:LaptopComponent}

      ]},
      {path:"header",component:HeaderComponent},
      {path:"**",component:ErrorComponent}
      


    ])
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
