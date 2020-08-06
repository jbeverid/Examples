import { Component, OnDestroy, OnInit } from '@angular/core';
import { AreaPermissionService } from '../../../shared/services/area-permission.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { eAreaPermission } from '../../../shared/enums/AreaPermission.enum';
import { ConfigurationService } from '../../../shared/services/configuration.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.scss']
})
export class AdminConfigComponent implements OnInit, OnDestroy {
  public PermissionForm: FormGroup = this.CreatePermissionReactiveForm();
  public ConfigurationForm: FormGroup = this.CreateConfigurationReactiveForm();
  // An array to hold all of the page subscriptions.
  public PageSubscriptions: Array<Subscription> = new Array<Subscription>();
  constructor(private moAreaPermissions: AreaPermissionService, private moConfigurationService: ConfigurationService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.PageSubscriptions.push(this.moAreaPermissions.GetPermissions().subscribe(toPermissions => {
      // Using patchValue instead of setValue because setValue requires the entire form to be sent as the parameter
      // whereas patchValue will only update based on the model that is sent in.
      // By not emitting an event we can subscribe to valueChanges and not hit a circulate loop causing a stack overflow error.
      this.PermissionForm.patchValue(toPermissions, { emitEvent: false });
    }));

    this.PageSubscriptions.push(this.moConfigurationService.GetConfig().subscribe(toConfig => {
      this.ConfigurationForm.patchValue(toConfig, { emitEvent: false });
    }));

    this.PageSubscriptions.push(this.PermissionForm.controls['IsComponentAreaEnabled'].valueChanges.subscribe(x => {
      console.info('Is Component Area Enabled', x);
      if (x === true) { this.moAreaPermissions.GrantAreaAccess(eAreaPermission.Components); }
      else { this.moAreaPermissions.RevokeAreaAccess(eAreaPermission.Components); }
    }));

    this.PageSubscriptions.push(this.PermissionForm.controls['IsDirectiveAreaEnabled'].valueChanges.subscribe(x => {
      console.info('Is Directive Area Enabled', x);
      if (x === true) { this.moAreaPermissions.GrantAreaAccess(eAreaPermission.Directives); }
      else { this.moAreaPermissions.RevokeAreaAccess(eAreaPermission.Directives); }
    }));

    this.PageSubscriptions.push(this.ConfigurationForm.controls['IsShowingUnauthorizedAreas'].valueChanges.subscribe(x => {
      this.moConfigurationService.SetConfig('IsShowingUnauthorizedAreas', x);
    }));
  }

  public ngOnDestroy(): void {
    // Loop through and unsubscribe.
    for (let toSubscription of this.PageSubscriptions) {
      if (toSubscription != null && !toSubscription.closed) {
        toSubscription.unsubscribe();
        console.log("Unsubscribed.", toSubscription);
      }
    }
  }

  private CreatePermissionReactiveForm(): FormGroup {
    // Field names in the reactive form match the model.
    // You can set the value and also the state of the component when building the form.
    // You can add validators, but in this use case validation isn't needed.
    return this.fb.group({
      IsHomeAreaEnabled: this.fb.control({ value: true, disabled: true }, []),
      IsComponentAreaEnabled: this.fb.control(true, []),
      IsDirectiveAreaEnabled: this.fb.control(true, []),
      IsAdminAreaEnabled: this.fb.control({ value: true, disabled: true }, []),
    });
  }

  private CreateConfigurationReactiveForm(): FormGroup {
    return this.fb.group({
      IsShowingUnauthorizedAreas: this.fb.control(true, [])
    })
  }
}
