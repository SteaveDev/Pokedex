import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPokemonComponent} from './pokemons/list-pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './pokemons/detail-pokemon/detail-pokemon.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonEditComponent} from './pokemons/pokemon-edit/pokemon-edit.component';

const routes: Routes = [
  {path: 'pokemon', component: ListPokemonComponent},
  {path: 'pokemon/edit/:id', component: PokemonEditComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
