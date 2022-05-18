import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ventana1Component } from './ventana1/ventana1.component';
import { Ventana2Component } from './ventana2/ventana2.component';
import { Ventana3Component } from './ventana3/ventana3.component';
import { Ventana4Component } from './ventana4/ventana4.component';

@NgModule({
  declarations: [
    AppComponent,
    Ventana1Component,
    Ventana2Component,
    Ventana3Component,
    Ventana4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
