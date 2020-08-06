import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { RemainingHeightDirective } from './directives/remaining-height.directive';
import { InlineValidationDirective } from './directives/inline-validation.directive';
import { SignatureBlockComponent } from './components/signature-block/signature-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [PageNotFoundComponent, AlertComponent, RemainingHeightDirective, InlineValidationDirective, SignatureBlockComponent],
  exports: [
    AlertComponent,
    InlineValidationDirective,
    SignatureBlockComponent,
    PageNotFoundComponent,
    RemainingHeightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
