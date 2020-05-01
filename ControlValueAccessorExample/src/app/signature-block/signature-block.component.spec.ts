import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureBlockComponent } from './signature-block.component';

describe('SignatureBlockComponent', () => {
  let component: SignatureBlockComponent;
  let fixture: ComponentFixture<SignatureBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
