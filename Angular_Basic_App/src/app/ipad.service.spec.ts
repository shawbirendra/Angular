import { TestBed } from '@angular/core/testing';

import { IPadService } from './ipad.service';

describe('IPadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IPadService = TestBed.get(IPadService);
    expect(service).toBeTruthy();
  });
});
