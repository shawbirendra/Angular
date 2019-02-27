import { TestBed } from '@angular/core/testing';

import { IPhoneService } from './iphone.service';

describe('IPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IPhoneService = TestBed.get(IPhoneService);
    expect(service).toBeTruthy();
  });
});
