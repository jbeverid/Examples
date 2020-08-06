import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitLicenseComponent } from './mit-license.component';

describe('MitLicenseComponent', () => {
  let component: MitLicenseComponent;
  let fixture: ComponentFixture<MitLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
