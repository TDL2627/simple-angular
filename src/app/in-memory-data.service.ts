import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Spider man' },
      { id: 2, name: 'Iron man' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Captain Marvel' },
      { id: 6, name: 'Jean Grey' },
      { id: 7, name: 'Fantastic four' },
      { id: 8, name: 'Ant man' },
      { id: 9, name: 'Venom' },
      { id: 10, name: 'Deadpool' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}