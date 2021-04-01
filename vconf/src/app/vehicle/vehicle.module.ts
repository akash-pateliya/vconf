import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';
import { ConfigureVehicleComponent } from './configure-vehicle/configure-vehicle.component';
import { StandardFeaturesComponent } from './standard-features/standard-features.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SelectVehicleComponent, ConfigureVehicleComponent, StandardFeaturesComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule
  ]
})
export class VehicleModule { }
