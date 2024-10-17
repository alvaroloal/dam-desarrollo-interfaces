import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesTableComponent } from './components/paises-tabla/paises-tabla.component';
import { AppRoutingModule } from './app-routing.module';  // <-- Importa el AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    PaisesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule  // <-- Asegúrate de que RouterModule esté aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
