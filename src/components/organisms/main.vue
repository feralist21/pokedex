<template>
	<main class="flex-auto py-4">
		<Container class="flex flex-col gap-4">
			<div>
				<input
					class="block w-full rounded-xl border-2 border-gray-400 px-6 py-4 text-lg"
					type="text"
					placeholder="Поиск..."
				/>
			</div>
			<div class="flex gap-6">
				<div class="w-1/5 pr-2 border-r-2 border-zinc-100">
					<form class="flex flex-col gap-3" action="">
						<h2 class="text-4xl font-medium mb-6">Filter</h2>
						<fieldset>
							<label
								for="countries"
								class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
								>Type</label
							>
							<select
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option selected>Choose a country</option>
								<option value="US">United States</option>
								<option value="CA">Canada</option>
								<option value="FR">France</option>
								<option value="DE">Germany</option>
							</select>
						</fieldset>
					</form>
				</div>
				<div class="w-4/5">
					<div class="grid grid-cols-4 gap-4">
						<div class="col-span-1">
							<div class="bg-gray-200 p-2 rounded-lg">
								<img
									class="block mx-auto w-auto h-48"
									src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
									alt=""
								/>
							</div>
							<div class="p-2">
								<p class="mb-4 text-gray-600 text-xs font-medium">#0001</p>
								<p class="text-xl text-black font-medium">Bulbasaur</p>
								<div class="mt-2 flex flex-wrap gap-1">
									<div
										class="flex text-xs font-light px-6 py-0.5 rounded bg-green-500 text-"
									>
										grass
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<nav aria-label="Page navigation example">
							<ul class="inline-flex items-center -space-x-px">
								<li>
									<a
										href="#"
										class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										<span class="sr-only">Previous</span>
										<svg
											aria-hidden="true"
											class="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
												clip-rule="evenodd"
											></path>
										</svg>
									</a>
								</li>
								<li>
									<a
										href="#"
										class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
										>1</a
									>
								</li>
								<li>
									<a
										href="#"
										class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
										>2</a
									>
								</li>
								<li>
									<a
										href="#"
										aria-current="page"
										class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
										>3</a
									>
								</li>
								<li>
									<a
										href="#"
										class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
										>4</a
									>
								</li>
								<li>
									<a
										href="#"
										class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
										>5</a
									>
								</li>
								<li>
									<a
										href="#"
										class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										<span class="sr-only">Next</span>
										<svg
											aria-hidden="true"
											class="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clip-rule="evenodd"
											></path>
										</svg>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</Container>
	</main>
</template>
<script setup>
import PokemonListController from '@/API/pokemonList/PokemonListController';
import Container from '@/components/layout/container.vue';

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
