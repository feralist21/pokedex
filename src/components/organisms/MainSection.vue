<template>
	<main class="flex-auto py-4">
		<Container class="flex flex-col gap-4">
			<Search />
			<div class="flex gap-6">
				<div class="w-1/5 pr-6 border-r-2 border-zinc-100">
					<Filter />
				</div>
				<div class="w-4/5">
					<div class="grid grid-cols-4 gap-4">
						<PokemonCard class="col-span-1"/>
					</div>
					<div class="mt-6">
						<Pagination/>
					</div>
				</div>
			</div>
		</Container>
	</main>
</template>
<script setup>
import PokemonListController from '@/API/PokemonList/PokemonListController';
import Container from '@/components/layout/Container.vue';
import Search from '@/components/molecules/Search.vue';
import Filter from '@/components/organisms/Filter.vue';
import Pagination from '@/components/molecules/Pagination.vue';
import PokemonCard from '@/components/molecules/PokemonCard.vue'


const foo = new PokemonListController();

async function getList() {
	try {
		const resp = await foo.getPokemonList();
		console.log(resp);
	} catch (error) {
		console.log(error);
	}
}

getList();
</script>
