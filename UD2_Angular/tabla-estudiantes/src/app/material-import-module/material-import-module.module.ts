import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialImportModule { }
