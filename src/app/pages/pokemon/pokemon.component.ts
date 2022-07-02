import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/service/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon';

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

  constructor(
    private service: PokedexService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let url = this.router.parseUrl(this.router.url);
    this.pokemonName = url.queryParams['name']
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
