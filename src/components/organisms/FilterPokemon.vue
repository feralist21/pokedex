<template>
	<form class="flex flex-col gap-3" action="">
		<h2 class="text-4xl font-medium mb-6">Filter</h2>
		<fieldset>
			<label for="countries" class="block mb-1 text-sm font-medium text-gray-900">Type</label>
			<select
				v-model="selectedType"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				@change="changedTypes(selectedType)"
			>
				<option disabled value="">Choose a type</option>
				<option v-for="(type, index) in typesList" :key="index" :value="type.name">
					{{ type.name }}
				</option>
			</select>
		</fieldset>
	</form>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import PokeAPI from '@/API/PokeAPI';

const api = new PokeAPI();

const emits = defineEmits({
	changePokemonType: ({ type }) => {
		console.log(type);
		if (type) {
			return type;
		} else {
			console.error('Invalid type event payload!');
		}
	},
});

// Data
const typesList = ref(null);
const selectedType = ref();

// Methods
async function getTypes() {
	try {
		const types = await api.getTypes();
		typesList.value = types.results;
	} catch (error) {
		console.error(error);
	}
}

function changedTypes(type) {
	emits('changePokemonType', { type } );
}

// Mounted
onMounted(() => {
	getTypes();
});
</script>
