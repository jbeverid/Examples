import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routes';
import { AdminConfigComponent } from './pages/admin-config/admin-config.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminConfigComponent],
  imports: [
    CommonModule,
    AdminRoutes,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
