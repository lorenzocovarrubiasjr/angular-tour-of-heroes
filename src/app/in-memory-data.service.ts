import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: 'Thor' },
      { id: 12, name: 'IronMan' },
      { id: 13, name: 'Black Panther' },
      { id: 14, name: 'Incredible Hulk' },
      { id: 15, name: 'SpiderMan' },
      { id: 16, name: 'Groot' },
      { id: 17, name: 'Captain America' },
      { id: 18, name: 'Dr. Strange' },
      { id: 19, name: 'Antman' },
      { id: 20, name: 'Hawkeye' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
