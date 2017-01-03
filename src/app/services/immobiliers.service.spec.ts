/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImmobiliersService } from './immobiliers.service';

describe('ImmobiliersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImmobiliersService]
    });
  });

  it('should ...', inject([ImmobiliersService], (service: ImmobiliersService) => {
    expect(service).toBeTruthy();
  }));
});
