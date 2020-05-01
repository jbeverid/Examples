import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signature-block',
  templateUrl: './signature-block.component.html',
  styleUrls: ['./signature-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SignatureBlockComponent),
    multi: true
  }]
})
export class SignatureBlockComponent implements OnInit, ControlValueAccessor {
  public faPenAlt = faPenAlt;

  constructor() { }

  ngOnInit(): void {
  }

  public registerOnChange(fn: any): void {
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(obj: any): void {
  }

}
