import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//...........
//MATERIAL
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './views/home/home.component';
import { RegistreComponent } from './views/registre/registre.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


//...........
//VIEWS


//...........
//COMPONENTS

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistreComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
