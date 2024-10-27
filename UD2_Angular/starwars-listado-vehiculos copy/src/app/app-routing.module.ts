import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [

  {path: 'vehicles', component: VehiclesComponent},
  {path: 'people', component: VehiclesComponent},
  //{path: '', redirectTo: VehiclesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
