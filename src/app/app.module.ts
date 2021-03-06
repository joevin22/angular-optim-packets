import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from "app/card/card.component";

import {AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
