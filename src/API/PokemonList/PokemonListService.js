import PokemonListRepository from "./PokemonListRepository";

export default class PokemonListService {
	constructor() {
		this.pokemonListRepository = new PokemonListRepository();
	}

	getPokemonsList() {
		return this.pokemonListRepository.getPokemonsList();
	}
}