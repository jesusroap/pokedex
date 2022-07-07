import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexService } from 'src/app/service/pokedex.service';

@Component({
  selector: 'app-random-pokemons',
  templateUrl: './random-pokemons.component.html',
  styleUrls: ['./random-pokemons.component.scss']
})
export class RandomPokemonsComponent implements OnInit {

  pokemonsAllDetails: any[] = []

  constructor(
    private service: PokedexService,
    private store: Store<Pokemon>
  ) { }

  ngOnInit(): void {
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  randomPokemons(number:number) {
    this.pokemonsAllDetails = []
    for (let i = 1; i <= number; i++) {
      let id:number = this.getRandomInt(50)
      this.service.getPokemonId(id).subscribe((data:any) => {
        this.pokemonsAllDetails.push(data)
      })
    }

    setTimeout(() => {
      const action: Action = {
        type: "RANDOM_POKEMONS",
        payload: this.pokemonsAllDetails
      }

      this.store.dispatch( action );
    }, 10);
  }

}
