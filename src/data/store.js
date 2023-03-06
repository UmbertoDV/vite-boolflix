import { reactive } from "vue";

export const store = reactive({
	movies: [],
	series: [],
	baseUri: "https://api.themoviedb.org/3/search/",
	apiKey: "997dfbb33215f3029613f10e805298e2",
	baseImgUrl: "https://image.tmdb.org/t/p/original",
});
