import { TestBed } from '@angular/core/testing';

import { FormOneService } from './form-one.service';

describe('FormOneService', () => {
  let service: FormOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
