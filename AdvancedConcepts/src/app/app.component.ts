import { Component, OnDestroy, OnInit } from '@angular/core';
import { AreaPermissionModel } from './modules/shared/models/AreaPermission.model';
import { AreaPermissionService } from './modules/shared/services/area-permission.service';
import { Subscription } from 'rxjs';
import { ConfigurationService } from './modules/shared/services/configuration.service';
import { ConfigurationModel } from './modules/shared/models/Configuration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // TypeScript allows for you to create instance variables via the constructor.
  // In this case the AreaPermissionService is injected via Angular's Dependency Injection.  This can be found in the
  // app.module.ts file.
  constructor(private moPermissionService: AreaPermissionService, private moConfigurationService: ConfigurationService) {
  }

  public AreaPermissions: AreaPermissionModel = null;
  public Config: ConfigurationModel = null;
  private Subscriptions: Array<Subscription> = new Array<Subscription>();
  public ngOnInit() {
    // Subscribing to Area Permissions
    // Don't forget to unsubscribe as this will waste memory throughout the Single Page Application (SPA)!
    this.Subscriptions.push(this.moPermissionService.GetPermissions().subscribe(toPermissions => {
      this.AreaPermissions = toPermissions;
    }));

    this.Subscriptions.push(this.moConfigurationService.GetConfig().subscribe(toConfig => {
      this.Config = toConfig;
    }));
  }

  public ngOnDestroy() {
    // Unsubscribing from the permission subscription.
    // Using custom typescript decorators there may be a better way to unsubscribe to follow a DRY design pattern.
    for (let toSubscription of this.Subscriptions) {
      if (toSubscription != null && !toSubscription.closed) {
        toSubscription.unsubscribe();
      }
    }
  }
}
