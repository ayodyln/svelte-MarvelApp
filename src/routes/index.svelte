<script>
	import {
		apiDATAChar,
		apiDATAComic,
		apiDATAAuthor,
		comicImage,
		comicImageTitle,
		comicLink
	} from './../lib/apiCall.js';
	import ComicsSection from '../components/indexComponents/comicsSection.svelte';
	import CharSection from '../components/indexComponents/charactersSection.svelte';
	import AuthorSection from '../components/indexComponents/authorsSection.svelte';
	import AuthorsSection from '../components/indexComponents/authorsSection.svelte';
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

<section id="body">
	<ComicsSection comicImage={$comicImage}  />

	<CharSection  />

	<AuthorsSection  />
</section>

<style lang="scss">
	section#body {
		background-color: $black;
		padding: 1rem;
	}
	.hero {
		margin-top: 52px;
	}
</style>
