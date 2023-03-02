import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(public dataService:DataService){}
  isUser = false
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.dataService.user.subscribe(res => {
        if(res == 'ciudadano' || res =='buscador'){
          this.isUser = true
        }else{
          this.isUser = false
        }
      })
    return this.isUser;
  }
  
}
