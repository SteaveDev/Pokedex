import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {POKEMONS} from '../../shared/list.pokemons';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[] = POKEMONS;
  pokemonToDisplay: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getSinglePokemon(id).subscribe(pkm => this.pokemonToDisplay = pkm);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listOfPokemons.length; i++) {
      // @ts-ignore
      // tslint:disable-next-line:radix
      if (this.listOfPokemons[i].id === parseInt(id)) {
        this.pokemonToDisplay = this.listOfPokemons[i];
      }
    }

    if (this.pokemonToDisplay === undefined){
      console.log('Le pokémon n\'existe pas...');
    }
    else{
      console.log(this.pokemonToDisplay);
    }
  }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`]);
    console.log('bingo');
  }

  editerPokemon(pokemonToEdit: Pokemon): void{
    const link = ['pokemon/edit', pokemonToEdit.id];
    this.router.navigate(link);
  }

  supprimerPokemon(pokemonToRemove: Pokemon): void{
    this.pokemonService.deletePokemon(pokemonToRemove).subscribe(() => this.goToPage('pokemon'));
  }
}
