<template>
	<div class="p-4 bg-slate-300 rounded-md flex flex-col gap-y-2">
		<p class="font-bold text-xl">Stats</p>
		<div class="flex flex-col gap-y-3">
			<div v-for="(stat, index) in stats" :key="index" class="flex flex-col gap-y-1">
				<p class="text-sm capitalize">{{ stat.stat.name }}</p>
				<div class="w-full bg-slate-100 rounded-xl">
					<div
						class="bg-red-600 h-6 rounded-xl text-xs py-1 px-2 text-center text-white"
						:style="calculateWidthStat(stat.base_stat)"
					>
						{{ stat.base_stat }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	stats: {
		type: Array,
		default: () => [],
	},
});

// Methods
function calculateWidthStat(statValue) {
	const value = Math.ceil(((statValue * 100) / 255).toFixed(2));
	return `width: ${value}%`;
}
</script>
