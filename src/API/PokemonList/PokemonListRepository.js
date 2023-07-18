import DEFAILT_POKE_PATH from '@/utils/constants';

export default class PokemonListRepository {
  async getPokemonsList() {
    const responce = await fetch(`${DEFAILT_POKE_PATH}/pokemon`);
    const data = await responce.json();
    return data;
  }
}
