import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SigninComponent } from './admin/signin/signin.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { VehicleAddComponent } from './vehicles/vehicle-add/vehicle-add.component';
import { VehiclesListComponent } from './vehicles/vehicles-list/vehicles-list.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    UsersListComponent,
    OrdersListComponent,
    VehicleAddComponent,
    VehiclesListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
