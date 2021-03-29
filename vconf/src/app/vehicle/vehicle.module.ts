import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';
import { ConfigureVehicleComponent } from './configure-vehicle/configure-vehicle.component';
import { DefaultFeaturesComponent } from './default-features/default-features.component';


@NgModule({
  declarations: [SelectVehicleComponent, ConfigureVehicleComponent, DefaultFeaturesComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
