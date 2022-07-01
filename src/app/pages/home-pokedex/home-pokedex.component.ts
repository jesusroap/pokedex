import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexService } from 'src/app/service/pokedex.service';

@Component({
  selector: 'app-home-pokedex',
  templateUrl: './home-pokedex.component.html',
  styleUrls: ['./home-pokedex.component.scss']
})
export class HomePokedexComponent implements OnInit {

  pokemons:any[] = []
  image:any

  constructor(
    private service: PokedexService 
  ) { }

  ngOnInit(): void {
    //this.getPokemon()
    this.getPokemons()
  }

  getPokemon() {
    this.service.getPokemon().subscribe((data:any) => {
      //this.pokemons = data
      this.image = data.sprites.front_default
      console.log(data.sprites.front_default)
      console.log(data)

    })
  }

  getPokemons() {
    this.service.getAllPokemons().subscribe((data:any) => {
      this.pokemons = data.results
      console.log(data.results)
    })
  }

}
