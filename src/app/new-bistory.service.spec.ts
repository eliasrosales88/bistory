import { TestBed } from '@angular/core/testing';

import { NewBistoryService } from './new-bistory.service';

describe('NewBistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewBistoryService = TestBed.get(NewBistoryService);
    expect(service).toBeTruthy();
  });
});
