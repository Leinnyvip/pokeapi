import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/'
  
  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20')
  }
  
  getInfo() {
    this.http.get('${this.url}')
  }
}
