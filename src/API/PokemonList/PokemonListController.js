import PokemonListService from "./PokemonListService";

export default class PokemonListController {
  constructor() {
    this.pokemonListService = new PokemonListService();
  }
  getPokemonList() {
    return this.pokemonListService.getPokemonsList();
  }
}