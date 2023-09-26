<template>
	<main class="flex-auto pt-10 pb-20">
		<Container class="flex flex-col gap-4">
			<Search />
			<div class="flex gap-6">
				<div class="w-1/5 pr-6 border-r-2 border-zinc-100">
					<Filter />
				</div>
				<div class="w-4/5 flex flex-col gap-y-10">
					<div class="grid grid-cols-4 gap-8">
						<PokemonCard
							v-for="item in pokeDetailList"
							:key="item.id"
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
import { ref } from 'vue';

import Container from '@/components/layout/Container.vue';
import Search from '@/components/molecules/Search.vue';
import Filter from '@/components/organisms/Filter.vue';
import Pagination from '@/components/molecules/PaginationMain.vue';
import PokemonCard from '@/components/molecules/PokemonCard.vue';
import PokeAPI from '@/API/PokeAPI';

const api = new PokeAPI();

let pokeDetailList = ref(null);

api.getPokemonList()
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
</script>
