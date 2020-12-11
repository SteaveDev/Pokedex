import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  // @ts-ignore
  singlePokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.singlePokemon = this.pokemonService.getSinglePokemon(id);
  }

}
