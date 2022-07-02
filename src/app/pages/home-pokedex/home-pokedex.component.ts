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

  search(){
    this.service.getPokemonName(this.namePokemon).subscribe((data:Pokemon) => {
      this.pokemonsAllDetails = []
      this.pokemonsAllDetails.push(data)
    })
  }

}
