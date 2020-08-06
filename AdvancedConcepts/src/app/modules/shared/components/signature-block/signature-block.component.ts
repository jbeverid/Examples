import {
  AfterViewInit,
      ChangeDetectionStrategy,
      Component, ElementRef,
      EventEmitter,
      forwardRef,
      Input,
      OnDestroy,
      OnInit,
      Output,
      Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faPenAlt, faSignature } from '@fortawesome/free-solid-svg-icons';
import { PersonModel } from '../../models/Person.model';
import { SignatureModel } from '../../models/Signature.model';

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
export class SignatureBlockComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  @Input() public CurrentPerson: PersonModel = null;
  @Input() public disabled: boolean = false;
  @Output() public OnSignedEvent: EventEmitter<SignatureModel> = new EventEmitter();
  // Angular Font Awesome Icon
  public readonly faPenAlt = faPenAlt;
  public readonly faSignature = faSignature;


  private InternalValue: SignatureModel = null;
  private onChanged: any = (_: any)  => {};
  private onTouched: any = () => {};

  public get value(): SignatureModel {
    return this.InternalValue;
  }

  public set value(poValue: SignatureModel) {
    this.writeValue(poValue);
  }

  constructor(private HostElement: ElementRef, private RenderEngine: Renderer2) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.RenderEngine.setAttribute(this.HostElement.nativeElement, 'disabled', null);
    } else {
      this.RenderEngine.removeAttribute(this.HostElement.nativeElement, 'disabled');
    }
  }

  public writeValue(obj: any): void {
    this.InternalValue = obj;
    this.onTouched();
    this.onChanged(obj);
  }

  public Sign(): void {
    if (!this.disabled) {
      const toNewSignature: SignatureModel = new SignatureModel();
      toNewSignature.PersonInfo = this.CurrentPerson;
      toNewSignature.Date = new Date();
      this.writeValue(toNewSignature);
      this.OnSignedEvent.emit(toNewSignature);
    }
  }
}
