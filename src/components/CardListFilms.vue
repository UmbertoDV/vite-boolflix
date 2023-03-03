<script>
import Card from "./SingleCard.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
	data() {
		return {
			title: "Hello World",
		};
	},

	components: {
		Card,
	},

	methods: {
		fetchMovies(text) {
			axios
				.get(
					`${store.baseUri}movie?api_key=${store.apiKey}&query=${text}&language=it`
				)
				.then((response) => {
					store.movies = response.data.results;
				});
		},
	},
};
</script>

<template>
	<div class="card-list py-3">
		<div class="container-fluid">
			<h2>FILM</h2>
			<div class="row">
				<Card></Card>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
//SCSS
</style>
