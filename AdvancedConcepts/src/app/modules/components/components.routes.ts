import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';


const COMPONENT_ROUTES: Routes = [
  { path: 'Default', component: DefaultComponent },
  { path: '', pathMatch: 'full' , redirectTo: 'Default' },
];
export const ComponentRoutes = RouterModule.forChild(COMPONENT_ROUTES);
