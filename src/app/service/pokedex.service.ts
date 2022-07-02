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

  getPokemonId(id:number): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon/${id}`)
  }

  getPokemonName(name:string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/pokemon/${name}`)
  }

  getAllPokemons(): Observable<any> {
    return this.http.get<any[]>(`${this.url}/pokemon?limit=10&offset=0`)
  }

  getAllDetailsPokemons(number:number) {
    var array = [];
    for (let i = 1; i <= number; i++) {
      array.push(this.getPokemonId(i))
    }
    return array
  }
}
