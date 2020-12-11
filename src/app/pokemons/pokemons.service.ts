import {Injectable} from '@angular/core';
import {Pokemon} from '../pokemon';
import {POKEMONS} from '../shared/list.pokemons';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() {
  }

  getListPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // @ts-ignore
  getSinglePokemon(id: number): Pokemon {
    const listPkm = this.getListPokemons();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < listPkm.length; i++) {
      if (id === listPkm[i].id) {
        return listPkm[i];
      }
    }
  }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }

}
