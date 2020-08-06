import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './pages/overview/overview.component';
import { HomeRoutes } from './home.routes';
import { MitLicenseComponent } from './components/mit-license/mit-license.component';
import { LicenseAgreementComponent } from './pages/license-agreement/license-agreement.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OverviewComponent, MitLicenseComponent, LicenseAgreementComponent],
  imports: [
    CommonModule,
    HomeRoutes,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
