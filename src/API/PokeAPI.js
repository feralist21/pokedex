import httpClinet from './httpClient';

const client = new httpClinet();

export default class PokeAPI {
	constructor() {
		this.baseUrl = 'https://pokeapi.co/api/v2/';
	}

	getPokemonList() {
		return client.get(`${this.baseUrl}pokemon`);
	}

	getPokemon(pokemonName) {
		return client.get(`${this.baseUrl}pokemon/${pokemonName}`);
	}

	getPokemonSpecies(pokemonName) {
		return client.get(`${this.baseUrl}pokemon-species/${pokemonName}`);
	}

	getAbility(abilityName) {
		return client.get(`${this.baseUrl}ability/${abilityName}`);
	}

	getTypes() {
		return client.get(`${this.baseUrl}type`);
	}
}
