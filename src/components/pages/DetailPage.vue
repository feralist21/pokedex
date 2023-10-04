<template>
	<main class="flex-auto pt-10 pb-20">
		<Container>
			<PokemonDetail :pokemon-info="pokemonInfo" />
		</Container>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PokemonDetail from '@/components/organisms/PokemonDetail.vue';
import Container from '@/components/layout/Container.vue';
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
		.catch((error) => console.error(error));
}

// Hooks
onMounted(() => {
	getDetailPokemonInfo();
});
</script>
