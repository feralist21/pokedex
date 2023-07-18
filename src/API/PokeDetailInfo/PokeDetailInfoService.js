import PokemonListController from "../PokemonList/PokemonListController";
import PokeDetailInfoRepository from "./PokeDetailInfoRepository";

export default class PokeDetailInfoService {
	constructor() {
		this.repository = new PokeDetailInfoRepository();
		this.pokemonList = new PokemonListController();
	}

	getPokeDetailInfo(url) {
		return this.repository.getPokeDetailInfo(url);
	}

	async getDetailInfoUrl() {
		try {
			const pokeList = await this.pokemonList.getPokemonList();

            const detailInfo = pokeList.results.map((pokemon) => {
				const pok = this.getPokeDetailInfo.bind(this, pokemon.url);
				return pok;
			});

			const foo = await Promise.all([...detailInfo.map((item) => item())]);

			return foo;
		} catch (error) {
			console.log(error);
		}
	}
}
