<script>
import Card from "./SingleCard.vue";
import { store } from "../data/store";

export default {
	data() {
		return {
			// title: "Hello",
			store,
			baseUrlImg: "https://image.tmdb.org/t/p/original",
		};
	},

	components: {
		Card,
	},
};
</script>

<template>
	<!-- PARTE FILM -->
	<div class="card-list py-3">
		<div class="container-fluid">
			<h2>FILM</h2>
			<div class="row">
				<Card
					v-for="movie in store.movies"
					:copertina="`${baseUrlImg}${movie.poster_path}`"
					:titolo="movie.title"
					:lingua="movie.original_language"
					:desc="movie.overview"
				></Card>
			</div>
		</div>
	</div>
	<!-- PARTE SERIE TV -->
	<!-- <div class="card-list py-3">
		<div class="container-fluid">
			<h2>SERIE TV</h2>
			<div class="row">
				<Card
					v-for="movie in movies"
					:copertina="`${baseUrlImg}${movie.poster_path}`"
				></Card>
			</div>
		</div>
	</div> -->
</template>

<style lang="scss" scoped>
//SCSS
</style>
