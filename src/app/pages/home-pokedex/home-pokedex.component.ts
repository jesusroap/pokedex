import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexService } from 'src/app/service/pokedex.service';

@Component({
  selector: 'app-home-pokedex',
  templateUrl: './home-pokedex.component.html',
  styleUrls: ['./home-pokedex.component.scss']
})
export class HomePokedexComponent implements OnInit {

  namePokemon!:string;
  pokemons:any[] = []
  pokemonsAllDetails:any[] = []
  image:any

  pokemons$!: Observable<any>;

  constructor(
    private service: PokedexService,
    private store: Store<any>
  ) {
    this.pokemons$ = store.select('data')
    this.pokemons$.subscribe( data => {

      console.log(data)

      try {
        if (data.activated_your_pokemon) {
          this.pokemonsAllDetails = [data.your_pokemon[1]]
        } else if (data.activated_random_pokemons) {
          this.pokemonsAllDetails = data.random_pokemons[1]
        }
      } catch (error) {

      }
    })

    // Opcion 2: Store
    // this.store.subscribe( state => {
    //   if (state.data.pokemons[1]) {
    //     console.log(state.data.pokemons[1]);
    //     this.pokemonsAllDetails = []
    //     this.pokemonsAllDetails.push(state.data.pokemons[1])
    //   }
    // })
  }

  ngOnInit(): void {
    this.getAllDetailsPokemons(10)
  }

  getAllDetailsPokemons(number:number) {
    for (let i = 1; i <= number; i++) {
      this.service.getPokemonId(i).subscribe(data => {
        this.pokemonsAllDetails.push(data)
      })
    }
  }

  searchPokemon() {
    if (this.namePokemon != "" && this.namePokemon != null) {
      this.service.getPokemonName(this.namePokemon).subscribe((data:Pokemon) => {
        this.pokemonsAllDetails = []
        this.pokemonsAllDetails.push(data)
      })
    } else {
      this.pokemonsAllDetails = []
      this.getAllDetailsPokemons(10)
    }
  }

}
