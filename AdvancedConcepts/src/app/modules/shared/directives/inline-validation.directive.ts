import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[AppInlineValidation]'
})
export class InlineValidationDirective implements OnDestroy {
  constructor(private HostElement: ElementRef, private control: NgControl, private renderer: Renderer2) {}
  @Input() ErrorMessage: string = '';
  public IsValidationErrorVisible: boolean = false;
  private StatusChangeSubscription: Subscription = null;

  /**
   * On blur, if the form control doesn't pass validation then display the validation error.
   */
  @HostListener('blur') public onBlur(): void {
    // While you can directly alter the ElementRef's nativeElement it leaves the application
    // vulnerable to XSS attacks.
    // Based on Angular docs use the Renderer to perform DOM manipulation.
    if (!this.control.valid && !this.IsValidationErrorVisible && (this.control.touched || this.control.dirty)) {
      const toNativeElement = this.HostElement.nativeElement as HTMLElement;
      const toValidationError = this.renderer.createElement('p') as HTMLParagraphElement;
      toValidationError.innerText = this.ErrorMessage;
      toValidationError.className = 'text-danger validation-error';
      this.renderer.insertBefore(toNativeElement.parentNode, toValidationError, null);
      this.IsValidationErrorVisible = true;

      // Remove the error message as soon as the user enters a valid value.
      this.StatusChangeSubscription = this.control.statusChanges.subscribe(x => {
        if (x === 'VALID') {
          this.renderer.removeChild(toNativeElement.parentNode, toValidationError, null);
          this.StatusChangeSubscription.unsubscribe();
          this.IsValidationErrorVisible = false;
        }
      });
    }
  }

  public ngOnDestroy(): void {
    if (this.StatusChangeSubscription != null && !this.StatusChangeSubscription.closed) {
      this.StatusChangeSubscription.unsubscribe();
    }
  }
}
