import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {ActivatedRoute, Router} from '@angular/router';
import {POKEMONS} from '../../shared/list.pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[] = POKEMONS;
  pokemonToDisplay: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

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

}
