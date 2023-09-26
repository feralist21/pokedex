export default class PokeAPI {
	constructor() {
		this.baseUrl = 'https://pokeapi.co/api/v2/';
	}

    async getPokemonList() {
        try {
            const response = await fetch(`${this.baseUrl}pokemon`);
            if (!response.ok) {
                throw new Error('Failed to fetch Pokemon list data');
            }
            const pokemonList = await response.json();
            return pokemonList;
        } catch (error) {
            console.error(error);
        }
    }

	async getPokemon(pokemonName) {
		try {
			const response = await fetch(`${this.baseUrl}pokemon/${pokemonName}`);
			if (!response.ok) {
				throw new Error('Failed to fetch Pokemon data');
			}
			const pokemonData = await response.json();
			return pokemonData;
		} catch (error) {
			console.error(error);
		}
	}

	async getPokemonSpecies(pokemonName) {
		try {
			const response = await fetch(`${this.baseUrl}pokemon-species/${pokemonName}`);
			if (!response.ok) {
				throw new Error('Failed to fetch Pokemon species data');
			}
			const speciesData = await response.json();
			return speciesData;
		} catch (error) {
			console.error(error);
		}
	}

	async getAbility(abilityName) {
		try {
			const response = await fetch(`${this.baseUrl}ability/${abilityName}`);
			if (!response.ok) {
				throw new Error('Failed to fetch ability data');
			}
			const abilityData = await response.json();
			return abilityData;
		} catch (error) {
			console.error(error);
		}
	}
}
