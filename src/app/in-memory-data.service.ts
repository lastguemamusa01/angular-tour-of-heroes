import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id:11, name: 'Dr Nice' },
      { id:12, name: 'Ojete' },
      { id:13, name: 'Vergas' },
      { id:14, name: 'Super man' },
      { id:15, name: 'extra1' },
      { id:16, name: 'extra2' },
      { id:17, name: 'extra3' },
      { id:18, name: 'extra4' }

    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  //   // If the heroes array is empty,
  //   // the method below returns the initial number (11).
  //   // if the heroes array is not empty, the method below returns the highest
  //   // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
