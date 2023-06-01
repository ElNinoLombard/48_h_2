import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  // canActivate(): boolean {
  //   // Replace this with your actual authentication check logic
  //   const isAuthenticated = /* Check if the user is authenticated */;

  //   if (isAuthenticated) {
  //     return true; // Allow access to the route
  //   } else {
  //     this.router.navigate(['/auth/login']); // Redirect to login page
  //     return false; // Prevent access to the route
  //   }
  // }
}
