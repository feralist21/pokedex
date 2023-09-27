<template>
	<div
		:class="{
			'bg-slate-700 text-white': bg === 'normal',
			'bg-amber-700 text-white': bg === 'fighting',
			'bg-sky-400 text-white': bg === 'flying',
			'bg-purple-600 text-white': bg === 'poison',
			'bg-amber-300 text-white': bg === 'ground',
			'bg-orange-800 text-white': bg === 'rock',
			'bg-lime-600 text-white': bg === 'bug',
			'bg-violet-700 text-white': bg === 'ghost',
			'bg-slate-400 text-white': bg === 'steel',
			'bg-orange-500 text-white': bg === 'fire',
			'bg-blue-600 text-white': bg === 'water',
			'bg-green-500 text-white': bg === 'grass',
			'bg-yellow-400 text-white': bg === 'electric',
			'bg-fuchsia-500 text-white': bg === 'psychic',
			'bg-cyan-400 text-white': bg === 'ice',
			'bg-red-400 text-white': bg === 'dragon',
			'bg-gray-900 text-white': bg === 'dark',
			'bg-pink-500 text-white': bg === 'fairy',
			'bg-neutral-500 text-white': bg === 'shadow',
			'bg-rose-800 text-white': bg === 'unknown',
			'px-6 py-1 text-xs': view === 'small',
			'px-8 py-1 text-s': view === 'medium',
		}"
		class="rounded-md"
	>
		{{ title }}
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: '',
	},
	bg: {
		type: String,
		default: 'normal',
	},
	view: {
		type: String,
		default: 'small',
	},
});
</script>
