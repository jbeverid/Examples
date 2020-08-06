import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { LicenseAgreementComponent } from './pages/license-agreement/license-agreement.component';


const HOME_ROUTES: Routes = [
  { path: 'License', component: LicenseAgreementComponent },
  { path: 'Overview', component: OverviewComponent },
  { path: '', pathMatch: 'full' , redirectTo: 'Overview' },
];
export const HomeRoutes = RouterModule.forChild(HOME_ROUTES);
