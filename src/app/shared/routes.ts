import { Routes } from "@angular/router";
import { ThemesModule } from '../modules/themes/themes.module';


export const projectRoutes : Routes =[
   {
    path:"themes",
    loadChildren : () => import("../modules/themes/themes.module").then(m => m.ThemesModule)
    
   }
]