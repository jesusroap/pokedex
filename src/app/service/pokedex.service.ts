import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url = "https://pokeapi.co/api/v2"

  constructor(
    private http: HttpClient
  ) { }

  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon[]>(`${this.url}/pokemon/ditto`)
  }

  getAllPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon[]>(`${this.url}/pokemon?limit=10&offset=0`)
  }
}
