import { Component, OnInit } from '@angular/core';
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

  constructor(
    private service: PokedexService
  ) { }

  ngOnInit(): void {
    this.getAllDetailsPokemons(10)
    console.log(this.pokemonsAllDetails)
  }

  getPokemons() {
    this.service.getAllPokemons().subscribe((data:any) => {
      this.pokemons = data.results
      console.log(data.results)
    })
  }

  getAllDetailsPokemons(number:number) {
    let data = this.service.getAllDetailsPokemons(number)
    for (let item of data) {
      item.subscribe(data => {
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

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  refreshPokemon() {
    this.pokemonsAllDetails = []
    for (let i = 1; i <= 10; i++) {
      let id:number = this.getRandomInt(50)
      this.service.getPokemonId(id).subscribe(data => {
        this.pokemonsAllDetails.push(data)
      })
    }
  }

  yourPokemon() {
    let id:number = this.getRandomInt(50)
    this.service.getPokemonId(id).subscribe(data => {
      this.pokemonsAllDetails = []
      this.pokemonsAllDetails.push(data)
    })
  }

}
