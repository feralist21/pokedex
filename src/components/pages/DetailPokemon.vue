<template>
	<main class="flex-auto pt-10 pb-20">
		<Container>
			<h1 class="mb-20 ms:mb-20 text-4xl sm:text-5xl text-center font-bold uppercase">
				venusaur #001
			</h1>
			<div class="sm:flex">
				<div class="w-full p-4 sm:w-1/2">
					<img
						src="https://web.archive.org/web/20220630055657/https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
						class="w-auto h-96 mx-auto"
						alt="venusaur"
					/>
				</div>
				<div class="w-full sm:w-1/2 sm:pl-6">
					<div class="md:w-80 p-4 bg-blue-400 rounded-md">
						<div class="flex mb-2">
							<div class="w-1/2 text-white">Base experience</div>
							<div class="w-1/2 text-black text-right">263 XP</div>
						</div>
						<div class="flex mb-2">
							<div class="w-1/2 text-white">Height</div>
							<div class="w-1/2 text-black text-right">2 m</div>
						</div>
						<div class="flex">
							<div class="w-1/2 text-white">Weight</div>
							<div class="w-1/2 text-black text-right">100 kg</div>
						</div>
					</div>
					<div class="mt-4 sm:mt-8">
						<p class="font-bold text-xl">Abilities</p>
						<ul class="mt-2 flex gap-4">
							<pokeTag view="medium" title="grass"/>
							<pokeTag view="medium" title="poison"/>
						</ul>
					</div>
					<div class="mt-4 sm:mt-8">
						<p class="font-bold text-xl">Type</p>
						<ul class="mt-2 flex gap-4">
							<pokeTag view="medium" title="grass"/>
							<pokeTag view="medium" title="poison"/>
						</ul>
					</div>
				</div>
			</div>
		</Container>
	</main>
</template>

<script setup>
import Container from '@/components/layout/Container.vue';
import pokeTag from '@/components/atoms/pokeTag.vue';
</script>
