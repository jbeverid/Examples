import { TestBed } from '@angular/core/testing';

import { AreaPermissionGuard } from './area-permission.guard';

describe('AreaPermissionGuard', () => {
  let guard: AreaPermissionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AreaPermissionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
