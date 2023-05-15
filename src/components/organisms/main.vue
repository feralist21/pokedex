<template>
  <main class="flex-auto py-4">
    <Container>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-span-1">
          <div class="bg-gray-400 p-2">
            <img class="block mx-auto w-auto h-48 rounded-lg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" />
          </div>
          <div class="p-2">
            <p class="mb-4 text-gray-600 text-xs font-medium">#0001</p>
            <p class="text-xl text-black font-medium">Bulbasaur</p>
            <div class="mt-2 flex flex-wrap gap-1">
              <div class="flex text-xs font-light px-6 py-0.5 rounded bg-green-500 text-">grass</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>
<script setup>
import Container from '@/components/layout/container.vue';
</script>
