<template>
	<main class="flex-auto pt-10 pb-20">
		<Container v-if="pokemonInfo">
			<h1 class="mb-20 ms:mb-20 text-4xl sm:text-5xl text-center font-bold uppercase">
				{{ pokemonInfo.name }}
			</h1>
			<div class="sm:flex">
				<div class="w-full p-4 sm:w-1/2">
					<img
						:src="
							pokemonInfo.sprites.other.dream_world.front_default ??
							pokemonInfo.sprites.front_default
						"
						class="w-auto h-96 mx-auto"
						:alt="pokemonInfo.name"
					/>
				</div>
				<div class="w-full sm:w-1/2 sm:pl-6">
					<div class="md:w-80 p-4 bg-blue-400 rounded-md">
						<div class="flex mb-2">
							<div class="w-1/2 text-white">Base experience</div>
							<div class="w-1/2 text-black text-right">
								{{ pokemonInfo.base_experience + ' XP' }}
							</div>
						</div>
						<div class="flex mb-2">
							<div class="w-1/2 text-white">Height</div>
							<div class="w-1/2 text-black text-right">
								{{ pokemonInfo.height + ' m' }}
							</div>
						</div>
						<div class="flex">
							<div class="w-1/2 text-white">Weight</div>
							<div class="w-1/2 text-black text-right">
								{{ pokemonInfo.weight + ' kg' }}
							</div>
						</div>
					</div>
					<div class="mt-4 sm:mt-8">
						<p class="font-bold text-xl">Abilities</p>
						<ul class="mt-2 flex gap-4">
							<pokeTag
								v-for="(item, index) in pokemonInfo.abilities"
								:key="index"
								view="medium"
								:title="item.ability.name"
							/>
						</ul>
					</div>
					<div class="mt-4 sm:mt-8">
						<p class="font-bold text-xl">Type</p>
						<ul class="mt-2 flex gap-4">
							<pokeTag
								v-for="(item, index) in pokemonInfo.types"
								:key="index"
								view="medium"
								:title="item.type.name"
								:bg="item.type.name"
							/>
						</ul>
					</div>
				</div>
			</div>
		</Container>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Container from '@/components/layout/Container.vue';
import pokeTag from '@/components/atoms/pokeTag.vue';
import PokeAPI from '@/API/PokeAPI';

// data
const api = new PokeAPI();
const route = useRoute();
const pokemonInfo = ref(null);

// Methods
function getDetailPokemonInfo() {
	api.getPokemon(route.params.id)
		.then((info) => {
			pokemonInfo.value = info;
		})
		.catch((error) => console.errror(error));
}

// Hooks
onMounted(() => {
	getDetailPokemonInfo();
});
</script>
