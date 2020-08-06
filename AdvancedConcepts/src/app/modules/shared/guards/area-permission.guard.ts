import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AreaPermissionService } from '../services/area-permission.service';
import { eAreaPermission } from '../enums/AreaPermission.enum';
import { AlertService } from '../services/alert.service';
import { AlertModel } from '../models/Alert.model';
import { eAlertPersistence, eAlertType } from '../enums/AlertType.enum';

@Injectable({
  providedIn: 'root'
})
export class AreaPermissionGuard implements CanActivate {
  constructor(private moPermissionService: AreaPermissionService, private moAlertService: AlertService, private router: Router) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (next.url.length > 0) {
      const toAreaName = next.url[0].path;
      let tbIsAllowed: boolean = false;
      let tsErrorMessage: string = '';
      switch (toAreaName) {
        case 'Components':
          tbIsAllowed = this.moPermissionService.HasAreaPermission(eAreaPermission.Components);
          if (!tbIsAllowed) {
            console.warn('Unauthorized attempt to access Components area.');
            this.moAlertService.Create(new AlertModel('You are not authorized to view the Components area.', eAlertType.Error, eAlertPersistence.UntilCleared))
          }
          break;
        case 'Directives':
          tbIsAllowed = this.moPermissionService.HasAreaPermission(eAreaPermission.Directives);
          if (!tbIsAllowed) {
            console.warn('Unauthorized attempt to access Directives area.');
            this.moAlertService.Create(new AlertModel('You are not authorized to view the Directives area.', eAlertType.Error, eAlertPersistence.UntilCleared))
          }
          break;
        default:
          // Assuming users are allowed to go anywhere else.
          tbIsAllowed = true;
          break;
      }
      if (!tbIsAllowed) { return this.router.parseUrl('/Home/Overview'); }
      return tbIsAllowed;
    }
    return false;
  }
}
