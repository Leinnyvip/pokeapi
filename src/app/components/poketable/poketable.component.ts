import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poketable',
  templateUrl: './poketable.component.html',
  styleUrls: ['./poketable.component.sass']
})
export class PoketableComponent {
  pokemones = null;
  pokemon: any = {}
  url = 'https://pokeapi.co/api/v2/{endpoint}/'

  constructor(private pokeapi: PokemonService) {
    this.pokeapi.getPokemon().subscribe((res: any) => {
      this.pokemones = res.results;
    });
  }

  getInfo() {
    this.pokeapi.getPokemon().subscribe((res: any) => {
      this.pokemon = res;
    })
  }
}
