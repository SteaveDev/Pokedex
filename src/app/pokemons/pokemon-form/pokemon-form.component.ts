import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  // @ts-ignore
  types: Array<string>;
  // @ts-ignore
  @Input() pokemon: Pokemon;

  constructor(private router: Router, private pokemonsService: PokemonsService) {
    this.types = this.pokemonsService.getPokemonTypes();
  }

  ngOnInit(): void {
  }

  hasType(type: string): boolean {
    const index = this.pokemon.types?.indexOf(type);
    // @ts-ignore
    return (index > -1);
  }

  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if (checked) {
      // @ts-ignore
      this.pokemon.types.push(type);
    } else {
      // @ts-ignore
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        // @ts-ignore
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types?.length === 1 && this.hasType(type)) {
      return false;
    }
    // @ts-ignore
    return !(this.pokemon.types?.length >= 3 && !this.hasType(type));
  }


  onSubmit(): void {
    console.log('Submit form !');

    this.pokemonsService.updatePokemon(this.pokemon).subscribe(() => this.goBack());
  }

  private goBack(): void {
    const link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }

}
