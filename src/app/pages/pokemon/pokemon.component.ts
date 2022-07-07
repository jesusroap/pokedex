import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/service/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon';
import { Store } from '@ngrx/store';

interface AppSate {
  count: number
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonName: string = "";
  pokemon:Pokemon = {
    "abilities": [
      {
        "ability": {
          "name": "",
          "url": ""
        },
      },
    ],
    "base_experience": 0,
    "name": "",
    "sprites": {
      "other": {
        "home": {
          "front_default": "",
        },
      },
    }
  }
  test: string = ""

  constructor(
    private service: PokedexService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppSate>
  ) {
    let url = this.router.parseUrl(this.router.url);
    if (url.queryParams['name']) {
      this.pokemonName = url.queryParams['name']
    } else {
      this.pokemonName = "bulbasaur"
    }
    this.store.subscribe( state => {
      this.test = state.count.toString()
    })
  }

  ngOnInit(): void {
    this.getPokemon(this.pokemonName)
  }

  getPokemon(name:string) {
    this.service.getPokemonName(name).subscribe((data:Pokemon) => {
      this.pokemon = data
    })
  }

}
