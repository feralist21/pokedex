import DEFAILT_POKE_PATH from "@/utils/constants";

export default class PokeAPI {
	constructor() {
		this.pokemonPath = "/pokemon";
        this.main = null;
	}

	async getData(url) {
		const responce = await fetch(url);
		const data = await responce.json();
		return data;
	}

	async getPokemonMain() {
        const data = await this.getData(`${DEFAILT_POKE_PATH}${this.pokemonPath}`); 
		this.main = await data;

        return data;
	}

    async getDetailInfoPokemon() {
        if (!this.main) {
            await this.getPokemonMain();
        }

        const detailInfoPromise = this.main.results.map((pokemon) => {
			return this.getData(pokemon.url);
		});

        const detailInfo = await Promise.all(detailInfoPromise);

        return detailInfo;
    }

    async getNextPage() {
        if (!this.main) {
            await this.getPokemonMain();
        }

        this.main = await this.getData(this.main.next);
    }

    async getPrevPage() {
        if (!this.main) {
            await this.getPokemonMain();
        }

        this.main = await this.getData(this.main.previous);
    }
}
