import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigureVehicleComponent } from './configure-vehicle/configure-vehicle.component';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';
import { StandardFeaturesComponent } from './standard-features/standard-features.component';

const routes: Routes = [
  { path: 'select-vehicle', component: SelectVehicleComponent },
  { path: 'configure-vehicle', component: ConfigureVehicleComponent },
  { path: 'standard-features', component: StandardFeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
