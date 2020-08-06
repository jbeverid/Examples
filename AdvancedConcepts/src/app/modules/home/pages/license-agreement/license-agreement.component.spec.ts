import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseAgreementComponent } from './license-agreement.component';

describe('ReactiveFormComponent', () => {
  let component: LicenseAgreementComponent;
  let fixture: ComponentFixture<LicenseAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
