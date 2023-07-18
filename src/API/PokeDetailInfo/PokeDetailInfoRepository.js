export default class PokeDetailInfoRepository {
  async getPokeDetailInfo(url) {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  }
}
