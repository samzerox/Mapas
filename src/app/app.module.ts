import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { ReactiveFormsModule } from '@angular/forms';

// maps
import { AgmCoreModule } from '@agm/core';



@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBR_ZCk3JeNJA6bRMdIZmWzIoAuBi-bgiI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
