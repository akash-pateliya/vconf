import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { SegmentComponent } from './segment/segment.component';
import {ConfigureComponent } from './configure/configure.component';
import {ContactFormComponent } from './contact-form/contact-form.component';
import { ModificationComponent } from './modification/modification.component';
import { OrderComponent } from './order/order.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'segment',
    component: SegmentComponent,
  },
  {
    path: 'configure',
    component: ConfigureComponent,
  },
  {
    path: 'contactus',
    component: ContactFormComponent,
  },
  {
    path: 'modify',
    component: ModificationComponent ,
  },
  { path: '', redirectTo: '/success', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
