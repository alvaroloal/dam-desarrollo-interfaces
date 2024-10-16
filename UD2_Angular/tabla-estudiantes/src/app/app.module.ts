import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { MaterialImportModule } from './material-import-module/material-import-module.module';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    TablaAlumnosComponent,//tabla

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    RouterModule.forRoot([]),
    MatCheckboxModule,//checkbox
    MatMenuModule,//menu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
