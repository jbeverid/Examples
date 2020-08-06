import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveRoutes } from './directives.routes';
import { DefaultComponent } from './pages/default/default.component';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DirectiveRoutes
  ]
})
export class DirectivesModule { }
