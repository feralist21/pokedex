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
		const pokeList = await this.pokemonList.getPokemonList();

		const detailInfoPromise = pokeList.results.map((pokemon) => {
			return this.getPokeDetailInfo(pokemon.url);
		});

		const detailInfo = await Promise.all(detailInfoPromise);

		return detailInfo;
	}
}
