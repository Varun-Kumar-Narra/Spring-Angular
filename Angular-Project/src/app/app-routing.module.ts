import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'address',component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
