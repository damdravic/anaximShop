import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
  
const routes : Routes = [
  {
    path: 'home',
    component: ThemesComponent
  },
  {
    path: 'themes/:slug',
    component : ThemesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemesRoutingModule { }
