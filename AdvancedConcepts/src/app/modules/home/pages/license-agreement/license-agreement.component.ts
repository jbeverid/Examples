import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignatureModel } from '../../../shared/models/Signature.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './license-agreement.component.html',
  styleUrls: ['./license-agreement.component.scss']
})
export class LicenseAgreementComponent implements OnInit {
  public Form: FormGroup = this.CreateReactiveForm();
  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.Form.controls['FormInfo'].statusChanges.subscribe(x => {
      const toSignatureControl = this.Form.controls['Signature'];
      if (x === 'VALID' && toSignatureControl.value == null) {
        toSignatureControl.enable();
      }
      else if (x === 'INVALID' && toSignatureControl.value == null) {
        toSignatureControl.disable();
      }
    });
  }

  public OnLicenseSigned(poSignatureData: SignatureModel): void {
    this.Form.disable();
  }

  private CreateReactiveForm(): FormGroup {
    // Validators do NOT run when a form control is disabled!
    return this.fb.group({
      FormInfo: this.fb.group({
        FirstName: this.fb.control('', [
          Validators.required, Validators.minLength(3),
          Validators.maxLength(20)
        ]),
        LastName: this.fb.control('', [
          Validators.required, Validators.minLength(3),
          Validators.maxLength(35)
        ]),
        HasAgreed: this.fb.control(false, [Validators.requiredTrue])
      }),
      Signature: this.fb.control({ value: null, disabled: true }, [Validators.required])
    });
  }
}
