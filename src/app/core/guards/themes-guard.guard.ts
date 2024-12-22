import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const themesGuardGuard: CanActivateFn = (route, state) => {


  //inject the Router to can navigate to a diffrent route
   const router = inject(Router);

   const userThemePreference = localStorage.getItem('themePreference');

   if(userThemePreference){
    router.navigate([`/themes/${userThemePreference}`]);
    return false;
   }else{
    router.navigate([`/themes/default`]);
   }



  return true;
};
