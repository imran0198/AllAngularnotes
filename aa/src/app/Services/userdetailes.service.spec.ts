import { TestBed } from '@angular/core/testing';

import { UserdetailesService } from './userdetailes.service';

describe('UserdetailesService', () => {
  let service: UserdetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
