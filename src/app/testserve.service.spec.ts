import { TestBed } from '@angular/core/testing';

import { TestserveService } from './testserve.service';

describe('TestserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestserveService = TestBed.get(TestserveService);
    expect(service).toBeTruthy();
  });
});
