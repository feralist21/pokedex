<template>
	<main class="flex-auto pt-10 pb-20">
		<Container class="flex flex-col gap-4">
			<Search />
			<div class="flex gap-6">
				<div class="w-1/5 pr-6 border-r-2 border-zinc-100">
					<FilterPokemon @change-pokemon-type="filteredPokemons" />
				</div>
				<div class="w-4/5 flex flex-col gap-y-10">
					<div class="grid grid-cols-4 gap-8">
						<PokemonCard
							v-for="item in pokemonSummaryData"
							:key="item.id"
							:href="item.name"
							:title="item.name"
							:img-src="item.sprites.other.dream_world.front_default"
							:serial-num="item.id"
							:types="item.types"
							class="col-span-1"
						/>
					</div>
					<div class="flex justify-center">
						<Pagination />
					</div>
				</div>
			</div>
		</Container>
	</main>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import Container from '@/components/layout/Container.vue';
import Search from '@/components/molecules/Search.vue';
import FilterPokemon from '@/components/organisms/FilterPokemon.vue';
import Pagination from '@/components/molecules/PaginationMain.vue';
import PokemonCard from '@/components/molecules/PokemonCard.vue';
import PokeAPI from '@/API/PokeAPI';

const api = new PokeAPI();

const pokemonDatailList = ref({});
const pokemonSummaryData = ref([]);

async function buildPokemonInfo() {
	try {
		pokemonDatailList.value = await api.getPokemonList();
		buildDetailPokemonInfo(pokemonDatailList.value.results);
	} catch (error) {
		console.error(error);
	}
}

function buildDetailPokemonInfo(pokemonDataList) {
	const pokemonDetailPromise = pokemonDataList.map((pokemon) => {
		return api.getPokemon(pokemon.name);
	});
	Promise.all(pokemonDetailPromise)
		.then((detailInfoAllPokemon) => (pokemonSummaryData.value = detailInfoAllPokemon))
		.catch((error) => console.error(error));
}

async function filteredPokemons(typeObject) {
	try {
		const responce = await api.getPokemonsFilteredByType(typeObject.type);
		const formatResponce = responce.pokemon.map((item) => {
			return item.pokemon;
		});
		buildDetailPokemonInfo(formatResponce);
	} catch (error) {
		console.error(error);
	}
}

onMounted(() => {
	buildPokemonInfo();
});
</script>
