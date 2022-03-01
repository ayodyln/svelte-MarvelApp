<script>
	import { respond } from '/Users/dylan/codeSandbox/svelte-MarvelApp/.svelte-kit/runtime/server/index.js';
	// import { comicImage } from './../../lib/apiCall.js';
	export let comicImage;
	export let comicLink;
	export let comicTitle;
</script>

<a href="/comics">
	<div id="comicDiv" style="background-image: url({comicImage}.jpg);">
		<div class="comicChild">
			<p class="is-size-2">Comics</p>
			<p>Marvel comics are plentiful, pick one to start reading!</p>
		</div>
	</div>
</a>

<style lang="scss">
	div#comicDiv {
		background: no-repeat right/40%;
		border-radius: 1rem;
		div.comicChild {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 100%;
			background: linear-gradient(to right, rgb(26, 26, 26) 60%, rgba(0, 0, 0, 0) 100%);
			padding: 1rem;
			color: white;
			border-radius: 1rem;
		}
		div.comicChild:hover {
			box-shadow: $red 0px 0px 10px;
		}
	}
</style>
