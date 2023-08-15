
import { Injectable } from '@angular/core';
import { CanActivate ,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthguardService} from '../services/authguard.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class authenticationGuard implements CanActivate{

  constructor(private auth:AuthguardService, private router:Router){}

  canActivate(){
    if(!this.auth.isCorrect){
      this.router.navigate(['login'])
      return false;
    }else{
      // this.router.navigate(['home'])
      return true;
    }

    }
}

