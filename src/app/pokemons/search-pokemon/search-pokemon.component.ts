import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]> | undefined;

  constructor(private router: Router, private pokemonsService: PokemonsService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonsService.searchPokemons(term)),
    );
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
