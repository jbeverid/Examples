import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaPermissionModel } from '../models/AreaPermission.model';
import { eAreaPermission } from '../enums/AreaPermission.enum';

/**
 * The Area Permission service provides state management for the user's current permissions.
 */
@Injectable({
  providedIn: 'root'
})
export class AreaPermissionService {
  // BehaviorSubjects start with an initial value and then can be subscribed to as an observable.
  private PermissionSubject: BehaviorSubject<AreaPermissionModel> = new BehaviorSubject<AreaPermissionModel>(new AreaPermissionModel());

  public GrantAreaAccess(peArea: eAreaPermission): void {
    this.ChangeAreaPermission(peArea, true);
  }

  public RevokeAreaAccess(peArea: eAreaPermission): void {
    this.ChangeAreaPermission(peArea, false);
  }

  public GetPermissions(): Observable<AreaPermissionModel> {
    return this.PermissionSubject.asObservable();
  }

  public HasAreaPermission(peArea: eAreaPermission): boolean {
    const toPermissions = this.PermissionSubject.getValue();
    switch (peArea) {
      case eAreaPermission.Components:
        return toPermissions.IsComponentAreaEnabled
      case eAreaPermission.Directives:
        return toPermissions.IsDirectiveAreaEnabled;
      default:
        console.warn('Area permission was attempted to be checked, but could not find a related permission.', peArea);
        return false;
    }
  }

  private ChangeAreaPermission(peArea: eAreaPermission, pbIsEnabled: boolean) {
    const toPermissions = this.PermissionSubject.getValue();
    switch (peArea) {
      case eAreaPermission.Components:
        toPermissions.IsComponentAreaEnabled = pbIsEnabled;
        break;
      case eAreaPermission.Directives:
        toPermissions.IsDirectiveAreaEnabled = pbIsEnabled;
        break;
      default:
        console.warn('Area permission was attempted to be changed, but could not find a related permission.', peArea);
        break;
    }
    this.PermissionSubject.next(toPermissions);
  }
}
