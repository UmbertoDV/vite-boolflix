<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
	data() {
		return {
			title: "Hello World",
		};
	},

	props: {
		titolo: String,
		originale: String,
		lingua: String,
		copertina: String,
	},

	// components:{
	//	 HelloWorld,
	// }
};
</script>

<template>
	<div class="col-xxl-2 col-md-3 col-sm-6">
		<img :src="copertina" alt="" />
		<span>{{ titolo }}</span>
	</div>
</template>

<style lang="scss" scoped>
//SCSS
img {
	width: 100%;
}
</style>
