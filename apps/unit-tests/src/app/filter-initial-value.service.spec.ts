import {TestBed} from '@angular/core/testing';

import {FilterInitialValueService} from './filter-initial-value.service';

describe('FilterInitialValueService', () => {
  let service: FilterInitialValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterInitialValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value from storage', () => {
    const value = 'value';
    service.setInitialValue(value);
    expect(service.getInitialValue()).toEqual(value);
  })
});
