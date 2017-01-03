/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompteService } from './compte.service';

describe('CompteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompteService]
    });
  });

  it('should ...', inject([CompteService], (service: CompteService) => {
    expect(service).toBeTruthy();
  }));
});
