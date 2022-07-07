import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexService } from 'src/app/service/pokedex.service';

@Component({
  selector: 'app-your-pokemon',
  templateUrl: './your-pokemon.component.html',
  styleUrls: ['./your-pokemon.component.scss']
})
export class YourPokemonComponent implements OnInit {

  constructor(
    private service: PokedexService,
    private store: Store<Pokemon>
  ) { }

  ngOnInit(): void {
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  yourPokemon() {
    let id:number = this.getRandomInt(50)

    this.service.getPokemonId(id).subscribe((data:any) => {
      const action: Action = {
        type: "YOUR_POKEMON",
        payload: data
      }

      this.store.dispatch( action );
    })
  }

}
