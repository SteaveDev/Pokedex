import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {POKEMONS} from './list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // tslint:disable-next-line:typedef
  createDb() {
    const pokemons = POKEMONS;
    return {pokemons};
  }

  constructor() {
  }
}
