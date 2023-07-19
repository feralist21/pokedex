<template>
	<div class="">
		<div class="bg-gray-200 p-2 rounded-lg">
			<img
				class="block mx-auto w-auto h-48"
				:src="imgSrc"
				:alt="title"
			/>
		</div>
		<div class="p-2">
			<p class="mb-4 text-gray-600 text-xs font-medium">{{ serialNum }}</p>
			<p class="text-xl text-black font-medium">{{ title }}</p>
			<div class="mt-2 flex flex-wrap gap-1">
				<div class="flex text-xs font-light px-6 py-0.5 rounded bg-green-500 text-">
					grass
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: ''
	},
	imgSrc: {
		type: String,
		default: '',
	},
	serialNum: {
		type: Number,
		default: 0
	},
});
</script>
