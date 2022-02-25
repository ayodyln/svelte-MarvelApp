<script>
	import {
		apiDATAChar,
		apiDATAComic,
		apiDATAAuthor,
		comicImage,
		comicImageTitle,
		comicLink
	} from './../lib/apiCall.js';
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
	<div id="comicDiv">
		<div class="comicDiv__childOne">
			<div>
				<p>Comics</p>
				<p>Marvel comics are plentiful, pick one to start reading!</p>
			</div>
			<a class="button" href="/comics">See Comics</a>
		</div>
		<div class="comicDiv__childTwo">
			<!-- <a href={$comicLink}>
				<img src="{$comicImage}.jpg" alt={$comicImageTitle} loading="lazy" />
			</a> -->
		</div>
	</div>

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

	div.container {
		margin: 3rem;
	}

	#comicDiv {
		display: flex;
		justify-content: space-between;
		background-color: lighten($black, $amount: 10);

		div.comicDiv__childOne {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			div {
				color: white;
				:nth-child(1) {
					font-size: 2.5rem;
				}
			}
			a.button {
				max-width: 10rem;
			}
		}
		div.comicDiv__childTwo {
			height: 185px;
			a {
				img {
					width: 10rem;
				}
			}
		}
	}
</style>
