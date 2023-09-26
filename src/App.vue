<template>
	<HeaderSection />
	<router-view></router-view>
	<FooterSection />
	<router-link to="/">Go to Home</router-link>
	<router-link to="/detail">Go to Detail</router-link>
</template>

<script setup>
import HeaderSection from '@/components/organisms/HeaderSection.vue';
import FooterSection from '@/components/organisms/FooterSection.vue';
</script>
