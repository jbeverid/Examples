import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-animated-progress-bar',
  templateUrl: './animated-progress-bar.component.html',
  styleUrls: ['./animated-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AnimatedProgressBarComponent),
    multi: true
  }]
})
export class AnimatedProgressBarComponent implements OnInit, ControlValueAccessor {

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
