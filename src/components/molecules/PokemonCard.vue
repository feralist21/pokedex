<template>
	<div class="bg-gray-200 rounded-lg p-4 flex flex-col gap-2">
		<div class="rounded-lg">
			<img class="block mx-auto w-auto h-48" :src="imgSrc" :alt="title" />
		</div>
		<div class="flex flex-col gap-y-2 pt-2 border-t border-gray-300">
			<p class="text-gray-600 text-xs font-medium">
				#{{ serialNum.toString().padStart(3, 0) }}
			</p>
			<p class="text-xl text-black font-medium">{{ title.toUpperCase() }}</p>
			<div v-if="types.length > 0" class="flex flex-wrap gap-1">
				<pokeTag v-for="item in types" :key="item.slot" :title="item.type.name" />
			</div>
		</div>
	</div>
</template>

<script setup>
import pokeTag from "@/components/atoms/pokeTag.vue";

defineProps({
	title: {
		type: String,
		default: "",
	},
	imgSrc: {
		type: String,
		default: "",
	},
	serialNum: {
		type: Number,
		default: 0,
	},
	types: {
		type: Array,
		default: () => [],
	},
});
</script>
