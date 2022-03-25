import { TestBed } from '@angular/core/testing';

import { DataGraphicService } from './data-graphic.service';

describe('DataGraphicService', () => {
  let service: DataGraphicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGraphicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
