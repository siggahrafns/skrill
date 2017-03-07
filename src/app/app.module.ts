import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";

import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';
import {ScrollSpyModule} from "ng2-scrollspy/dist/index";

const APP_COMPONENTS = [
  HomeComponent,
  NavbarComponent
];

@NgModule({
  declarations: [
    AppComponent, APP_COMPONENTS
  ],
  imports: [
    routing,
    BrowserModule,
    ScrollSpyModule.forRoot(),
    FormsModule,
    HttpModule, MdCardModule, MdButtonModule, MdIconModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
