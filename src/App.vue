<template>
	<HeaderSection />
	<router-view></router-view>
	<FooterSection />
</template>

<script setup>
import HeaderSection from '@/components/organisms/HeaderSection.vue';
import FooterSection from '@/components/organisms/FooterSection.vue';
</script>
