import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LayoutComponent } from './layout/layout.component';
import { ThemesModule } from './modules/themes/themes.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
