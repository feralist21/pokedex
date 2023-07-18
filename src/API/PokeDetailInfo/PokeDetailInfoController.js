import PokeDetailInfoService from "./PokeDetailInfoService";


export default class PokeDetailInfoController {
    constructor() {
        this.pokeDetailInfoService = new PokeDetailInfoService();
    }

    getPokeDetailInfo(url) {
        return this.pokeDetailInfoService.getPokeDetailInfo(url);
    }

    getDetailInfoUrl() {
        return this.pokeDetailInfoService.getDetailInfoUrl();
    }
}