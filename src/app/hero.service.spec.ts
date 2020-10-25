import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import {Observable} from 'rxjs';
import {Hero} from './hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
