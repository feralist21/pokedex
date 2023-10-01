<template>
	<div class="p-4 bg-slate-300 rounded-md flex flex-col gap-y-2">
		<p class="font-bold text-xl">Stats</p>
		<div class="flex gap-x-2">
			<div v-for="(stat, index) in stats" :key="index" class="w-1/6 flex-grow">
				<div class="flex flex-col gap-y-1">
					<div v-for="item in constValues.countRow" class="h-1 bg-white rounded-sm"></div>
				</div>
				<p class="mt-2 text-xs text-center">{{ stat.stat.name }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue';

defineProps({
	stats: {
		type: Array,
		default: () => [],
	},
});

const constValues = reactive({
	maxValue: 255,
	countRow: 15,
	oneRowValue: 17,
});

// Methods

// const calcStat = (stat) => {};

// Максимальное значение 255. Есть 15 рядов, 1 ряд = 17 ед. Нужно взять стату покемона и поделить на 17 и округлить в ближайшему целому = получим кол-во рядов, которое надо закрасить
</script>
