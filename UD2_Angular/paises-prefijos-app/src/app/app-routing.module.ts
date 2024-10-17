import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesTableComponent } from './components/paises-tabla/paises-tabla.component';

const routes: Routes = [
  { path: '', component: PaisesTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
