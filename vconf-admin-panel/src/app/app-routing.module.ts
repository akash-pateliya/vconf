import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from './admin/admin.service';
import { SigninComponent } from './admin/signin/signin.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { VehicleAddComponent } from './vehicles/vehicle-add/vehicle-add.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'orders-list', component: OrdersListComponent, canActivate: [AdminService] },
  { path: 'users-list', component: UsersListComponent, canActivate: [AdminService] },
  { path: 'vehicles-list', component: VehiclesListComponent, canActivate: [AdminService] },
  { path: 'vehicle-add', component: VehicleAddComponent, canActivate: [AdminService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
