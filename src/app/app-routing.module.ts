import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { TblComponent } from './user/tbl/tbl.component';
import { AddressComponent } from './user/address/address.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
const routes: Routes = [
  
  {path:"", component : NavComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "users", component: TblComponent},
      {path: "address", component: AddressComponent},
      {path: "", redirectTo: "dashboard", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
