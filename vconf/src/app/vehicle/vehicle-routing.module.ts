import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigureVehicleComponent } from './configure-vehicle/configure-vehicle.component';
import { DefaultConfigurationsComponent } from './default-configurations/default-configurations.component';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';

const routes: Routes = [
  { path: 'select-vehicle', component: SelectVehicleComponent },
  { path: 'configure-vehicle', component: ConfigureVehicleComponent },
  { path: 'default-configurations', component: DefaultConfigurationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
