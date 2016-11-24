/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlarmserviceService } from './alarmservice.service';

describe('Service: Alarmservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmserviceService]
    });
  });

  it('should ...', inject([AlarmserviceService], (service: AlarmserviceService) => {
    expect(service).toBeTruthy();
  }));
});
