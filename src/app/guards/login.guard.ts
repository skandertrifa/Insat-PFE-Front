import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ( !this.authService.isAuthenticated()){
      this.router.navigate(['/auth/login']);
      return false;
    }
    if ( this.authService.isAuthenticated()){
      //this.router.navigate(['/auth/login']);
      //console.log("activated router : ",this.router.url)
      return true;
    }

    return true;
  }


}
