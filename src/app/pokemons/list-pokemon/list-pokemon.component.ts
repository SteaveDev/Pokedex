import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemons ?: Pokemon[];

  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonsService.getListPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
    alert('Vous avez séléctionné: ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
