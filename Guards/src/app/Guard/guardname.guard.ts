import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceGuardService } from '../Service/service-guard.service';

@Injectable({
  providedIn: 'root'
})
export class GuardnameGuard implements CanActivate {
constructor(private guards:ServiceGuardService){}

  canActivate(){
    if(this.guards.getData()){
      return true
    }else{
      window.alert("complete the registration")
    }
  }
    
}
