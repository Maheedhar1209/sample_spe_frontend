import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(){
   
    //const currentUser = localStorage.getItem("currentUser");
   const token=localStorage.getItem("user_token");
   console.log(token);
    if (token) {
      return true;
    }
    alert("your session has expired");
    this.router.navigate(['/login']);
    return false;
  }
}
