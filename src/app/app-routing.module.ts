import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  projectRoutes } from './shared/routes';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LayoutComponent } from './layout/layout.component';
 
const routes: Routes = [
 { path: '',
  redirectTo: '/themes/defaultm',
  pathMatch: 'full'
},
{
  path: "maintenance",
  component: MaintenanceComponent
},
{
  path: "",
  component: LayoutComponent,
  children: projectRoutes
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
