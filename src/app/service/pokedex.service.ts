import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  //private url = "https://pokeapi.co/api/v2/pokemon/ditto"
  private url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon[]>(this.url)
  }

  getAllPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon[]>(this.url)
  }
}
