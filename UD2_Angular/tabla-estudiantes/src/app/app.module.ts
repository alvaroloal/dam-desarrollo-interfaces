import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { MaterialImportModule } from './material-import-module/material-import-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
