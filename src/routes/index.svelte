<script>
	import {
		apiDATAChar,
		apiDATAComic,
		apiDATAAuthor,
		comicImage,
		comicImageTitle,
		comicLink
	} from './../lib/apiCall.js';
	import ComicSection from '../components/indexComponents/comicsSection.svelte';
	import ComicsSection from '../components/indexComponents/comicsSection.svelte';
</script>

<!-- DONT FORGET TO LINK BACK TO MARVEL -->

<svelte:head>
	<title>Sveltekit Marvel App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<section class="hero">
	<div class="hero-body">
		<p class="title">Marvel Web App</p>
		<p class="subtitle">Student-Research Project</p>
	</div>
</section>

<section class="section" id="body">
	<ComicsSection comicImage={$comicImage} comicLink={$comicLink} comicTitle={$comicImageTitle} />

	<div>
		<div>
			<div>
				<h2>Characters</h2>
				<p>Explore the characters of the Marvel Multiverse!</p>
			</div>
			<a href="/" class="button">See Characters</a>
		</div>
	</div>

	<div>
		<div>
			<div>
				<h2>Authors</h2>
				<p>The creators of the Marvel Comics and their stores.</p>
			</div>
			<a href="/" class="button">See Authors</a>
		</div>
	</div>
</section>

<style lang="scss">
	#body {
		background-color: $black;
	}
	.hero {
		margin-top: 52px;
	}
</style>
