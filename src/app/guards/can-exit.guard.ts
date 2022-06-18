import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';

import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface CanExit {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanExitGuard implements CanDeactivate<CanExit> {
  canDeactivate(
    component: CanExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.canDeactivate) {
        return component.canDeactivate();
      }
      return true;
  }

}