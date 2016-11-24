/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetreportService } from './getreport.service';

describe('Service: Getreport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetreportService]
    });
  });

  it('should ...', inject([GetreportService], (service: GetreportService) => {
    expect(service).toBeTruthy();
  }));
});
