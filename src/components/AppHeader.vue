<script>
import headerData from "../data/headerData";

export default {
	data() {
		return {
			headerData: headerData,
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
				<ul class="m-0">
					<li v-for="text in headerData">
						<a :href="text.url">{{ text.text }}</a>
					</li>
				</ul>
			</nav>
		</div>
		<div class="right-header d-flex align-items-center gap-3 px-3">
			<div class="input-group flex-nowrap">
				<span class="input-group-text bg-dark" id="addon-wrapping"
					><font-awesome-icon icon="fa-solid fa-magnifying-glass"
				/></span>
				<input
					type="text"
					class="form-control bg-dark"
					placeholder="Cerca un film"
					aria-describedby="addon-wrapping"
				/>
			</div>
			<span>KIDS</span>
			<font-awesome-icon icon="fa-solid fa-bell" />
			<img class="avatar" src="/netflix-avatar.png" alt="" />
			<font-awesome-icon icon="fa-solid fa-sort-down" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/global.scss" as *;
.header {
	background-color: $blackColor;
	color: $whiteColor;
}
img {
	height: 70px;
}
.avatar {
	height: 50px;
	border-radius: 10px;
}
li {
	display: inline-block;
	margin: 10px;
	a {
		color: $whiteColor;
		padding-top: 17px;
		padding-bottom: 10px;
		&:hover {
			border-bottom: 2px solid $whiteColor;
		}
	}
}
.active {
	border-bottom: 2px solid $whiteColor;
}
.input-group-text,
.form-control,
.form-control::placeholder,
.form-control:focus {
	color: $whiteColor;
}

//SCSS
</style>
