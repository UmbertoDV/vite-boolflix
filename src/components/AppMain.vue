<script>
import CardListFilms from "./CardListFilms.vue";
import CardListSeries from "./CardListSeries.vue";
export default {
	data() {
		return {
			title: "Hello World",
		};
	},

	components: {
		CardListFilms,
		CardListSeries,
	},
};
</script>

<template>
	<CardListFilms />
	<CardListSeries />
</template>

<style lang="scss" scoped>
//SCSS
</style>
