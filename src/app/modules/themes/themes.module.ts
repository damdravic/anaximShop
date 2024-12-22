import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { DefaultComponent } from './default/default.component';

import { ThemesRoutingModule } from './themes-routing.module';



@NgModule({
  declarations: [
    ThemesComponent,
    DefaultComponent,
   
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ],
  exports: [
    ThemesComponent,
    DefaultComponent,

  ]

})
export class ThemesModule { }
