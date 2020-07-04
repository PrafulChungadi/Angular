// code check weather token
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot ,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { User } from '../home/app.LoginPageModel';


@Injectable()
export class SecurityLogic implements CanActivate {

  constructor(private _router: Router ,public _user :User) {
  }

  canActivate(next :ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean{ 
  if(this._user.token.length != 0){
      return true ; //navigation allowed
  }

      //navigate to login page
      this._router.navigate(['/Login']);
      //you can save redirect URL so after authing we can move back to 
      return false;
  }
  }