import { TestBed } from '@angular/core/testing';

import { GuardnameGuard } from './guardname.guard';

describe('GuardnameGuard', () => {
  let guard: GuardnameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardnameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
