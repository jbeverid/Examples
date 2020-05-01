import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedProgressBarComponent } from './animated-progress-bar.component';

describe('AnimatedProgressBarComponent', () => {
  let component: AnimatedProgressBarComponent;
  let fixture: ComponentFixture<AnimatedProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
