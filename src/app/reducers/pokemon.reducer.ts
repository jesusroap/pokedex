import { Action } from "@ngrx/store";
import { Pokemon } from "../models/pokemon";

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export function pokemonReducer( state: Pokemon[] = [], action: Action ) {
  switch ( action.type ) {
    case "YOUR_POKEMON":
      return {
        ...state,
        your_pokemon: [state, action.payload],
        activated_your_pokemon: true,
        activated_random_pokemons: false
      }
    case "RANDOM_POKEMONS":
      return {
        ...state,
        random_pokemons: [state, action.payload],
        activated_random_pokemons: true,
        activated_your_pokemon: false
      }
    default:
      return {
        ...state
      }
  }
}

