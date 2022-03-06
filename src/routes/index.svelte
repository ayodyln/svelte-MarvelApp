<script>
	import {
		apiDATAChar,
		apiDATAComic,
		apiDATAAuthor,
		comicImage,
		charImage,
		authorImage
	} from '$lib/apiCall.js';
	import ComicsSection from '../components/indexComponents/comicsSection.svelte';
	import CharSection from '../components/indexComponents/charactersSection.svelte';
	import AuthorsSection from '../components/indexComponents/authorsSection.svelte';
	import HeroSection from '../components/indexComponents/heroSection.svelte';
</script>

<svelte:head>
	<title>Sveltekit Marvel App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main>
	<div id="hero__wrapper">
		<HeroSection />
	</div>

	<section id="body">
		<ComicsSection comicImage={$comicImage} />

		<CharSection charImage={$charImage} />

		<AuthorsSection />
	</section>
</main>

<style lang="scss">
	main {
		background-color: $black;
	}

	section#body {
		padding: 1rem;
	}

	div#hero__wrapper {
		margin-top: 52px;
	}

	@media only screen and (min-width: 560px) {
		main {
			min-height: 100vh;
			section#body {
				display: flex;
			}
		}
	}

	@media only screen and (min-width: 1024px) {
		section#body {
			max-width: 1080px;
			margin: auto;
		}
	}
</style>
