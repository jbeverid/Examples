import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AlertModel } from '../../models/Alert.model';
import { eAlertPersistence, eAlertType } from '../../enums/AlertType.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  public CurrentAlert: AlertModel = null;
  public eAlertPersistence = eAlertPersistence;
  public eAlertType = eAlertType;
  private Subscriptions: Array<Subscription> = new Array<Subscription>();

  private IsShownAtLeastOnce: boolean = true;
  private CurrentUrl = this.router.url;
  constructor(private moAlertService: AlertService, private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.Subscriptions.push(this.moAlertService.GetAlert().subscribe(toMessage => {
      this.CurrentAlert = toMessage;
      this.IsShownAtLeastOnce = true;
    }));

    this.Subscriptions.push(this.router.events.subscribe(toRouterEvent => {
      if (toRouterEvent instanceof NavigationStart) {
        this.CurrentUrl = this.router.url;
        console.log('Start', this.CurrentUrl);
      }
      else if (toRouterEvent instanceof NavigationEnd) {
        console.log('End', this.router.url);
        if (this.CurrentAlert != null) {
          // After navigating to another page, clear the current alert.
          if (this.CurrentAlert.Persistence === eAlertPersistence.OnPage) {
            this.moAlertService.Clear();
          }
        }
      }
    }));
  }

  public ClearMessage(): void {
    this.moAlertService.Clear();
  }

  public ngOnDestroy() {
    for (let toSubscription of this.Subscriptions) {
      if (toSubscription != null && !toSubscription.closed) {
        toSubscription.unsubscribe();
      }
    }
  }
}
