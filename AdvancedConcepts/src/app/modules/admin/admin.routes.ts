import { RouterModule, Routes } from '@angular/router';
import { AdminConfigComponent } from './pages/admin-config/admin-config.component';


const ADMIN_ROUTES: Routes = [
  { path: 'Configuration', component: AdminConfigComponent },
  { path: '', pathMatch: 'full' , redirectTo: 'Configuration' },
];
export const AdminRoutes = RouterModule.forChild(ADMIN_ROUTES);
