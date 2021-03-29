import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'order', loadChildren: () => import("./order/order.module").then(m => m.OrderModule) },
      { path: 'user', loadChildren: () => import("./user/user.module").then(m => m.UserModule) },
      { path: 'vehicle', loadChildren: () => import("./vehicle/vehicle.module").then(m => m.VehicleModule) }
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
