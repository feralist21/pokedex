<template>
	<div
		:class="{
			'bg-slate-700 text-white': title === 'normal',
			'bg-amber-700 text-white': title === 'fighting',
			'bg-sky-400 text-white': title === 'flying',
			'bg-purple-600 text-white': title === 'poison',
			'bg-amber-300 text-white': title === 'ground',
			'bg-orange-800 text-white': title === 'rock',
			'bg-lime-600 text-white': title === 'bug',
			'bg-violet-700 text-white': title === 'ghost',
			'bg-slate-400 text-white': title === 'steel',
			'bg-orange-500 text-white': title === 'fire',
			'bg-blue-600 text-white': title === 'water',
			'bg-green-500 text-white': title === 'grass',
			'bg-yellow-400 text-white': title === 'electric',
			'bg-fuchsia-500 text-white': title === 'psychic',
			'bg-cyan-400 text-white': title === 'ice',
			'bg-red-400 text-white': title === 'dragon',
			'bg-gray-900 text-white': title === 'dark',
			'bg-pink-500 text-white': title === 'fairy',
			'bg-neutral-500 text-white': title === 'shadow',
			'bg-rose-800 text-white': title === 'unknown',
		}"
		class="px-6 py-1 rounded-md text-xs"
	>
		{{ title }}
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: "",
	},
});
</script>
