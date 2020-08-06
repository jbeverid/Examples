import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { AreaPermissionService } from './modules/shared/services/area-permission.service';
import { AlertService } from './modules/shared/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AreaPermissionService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
