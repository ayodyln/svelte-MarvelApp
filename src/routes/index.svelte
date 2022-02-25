<script>
	import { apiDATA } from './../lib/apiCall.js';
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
	<div class="container is-fullhd">
		<div>
			<h2>Comics</h2>
			<p>Marvel comics are plentiful, pick one to start reading!</p>
			<a class="button" href="/">See Comics!</a>
		</div>
	</div>
	<div class="container is-fullhd">
		<div>
			<h2>Characters</h2>
			<p>Explore the characters of the Marvel Multiverse!</p>
			<a href="/" class="button">Explore Characters</a>
		</div>
	</div>
	<div class="container is-fullhd">
		<div>
			<h2>Authors</h2>
			<p>The creators of the Marvel Comics and their stores.</p>
			<a href="/" class="button">See Authors</a>
		</div>
	</div>
</section>

<style>
	#body {
		background-color: var(--black);
	}
	.hero {
		margin-top: 52px;
	}

	div.container {
		margin: 3rem;
	}
</style>
