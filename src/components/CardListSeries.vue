<script>
import Card from "./SingleCard.vue";
export default {
	data() {
		return {
			title: "Hello World",
		};
	},

	components: {
		Card,
	},
};
</script>

<template>
	<div class="card-list py-3">
		<div class="container-fluid">
			<h2>SERIE TV</h2>
			<div class="row">
				<Card></Card>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
//SCSS
</style>
