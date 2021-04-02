import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';
import { ConfigureVehicleComponent } from './configure-vehicle/configure-vehicle.component';
import { FormsModule } from '@angular/forms';
import { DefaultConfigurationsComponent } from './default-configurations/default-configurations.component';


@NgModule({
  declarations: [SelectVehicleComponent, ConfigureVehicleComponent, DefaultConfigurationsComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule
  ]
})
export class VehicleModule { }
