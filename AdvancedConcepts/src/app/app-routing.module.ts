import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/pages/page-not-found/page-not-found.component';
import { AreaPermissionGuard } from './modules/shared/guards/area-permission.guard';

// Home Module, Component Module, Directive Module, Admin Module are lazy loaded.
// The App Module and Shared Module is not lazy loaded.
// In this project the App Module is bootstrapped by Angular.  See main.ts to check the bootstrapped module.
const routes: Routes = [
  { path: '', redirectTo: 'Home/Overview', pathMatch: 'full' },
  { path: 'Home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'Components',
    loadChildren: () => import('./modules/components/components.module').then(m => m.ComponentsModule),
    canActivate: [AreaPermissionGuard]
  },
  { path: 'Directives',
    loadChildren: () => import('./modules/directives/directives.module').then(m => m.DirectivesModule),
    canActivate: [AreaPermissionGuard]
  },
  { path: 'Admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
