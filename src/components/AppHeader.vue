<script>
import { headerNav } from "../data/headerLists";

export default {
	data() {
		return {
			title: "Hello World",
		};
	},

	// components:{
	//	 HelloWorld,
	// }
};
</script>

<template>
	<div class="header d-flex justify-content-between">
		<div class="left-header d-flex align-items-center">
			<img src="/logo-netflix.png" alt="" />
			<nav>
				<ul>
					<li v-for="text in headerNav">
						<a href="">{{ text.text }}</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="right-header"></div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/assetscss/variables" as *;
@use "../assets/scss/global.scss" as *;
.header {
	background-color: $blackColor;
	color: $whiteColor;
}
img {
	height: 70px;
}
//SCSS
</style>
