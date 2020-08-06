import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutes } from './components.routes';
import { DefaultComponent } from './pages/default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    ComponentRoutes
  ]
})
export class ComponentsModule { }
