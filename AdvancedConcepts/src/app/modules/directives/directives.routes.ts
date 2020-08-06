import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';


const DIRECTIVE_ROUTES: Routes = [
  { path: 'Default', component: DefaultComponent },
  { path: '', pathMatch: 'full' , redirectTo: 'Default' },
];
export const DirectiveRoutes = RouterModule.forChild(DIRECTIVE_ROUTES);
