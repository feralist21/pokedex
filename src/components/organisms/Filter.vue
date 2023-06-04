<template>
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
</template>

<script setup></script>
