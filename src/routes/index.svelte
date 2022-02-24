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

<section class="section">
	<div class="container is-fullhd">
		<div>
			This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
		</div>
	</div>
	<div class="container is-fullhd">
		<div>
			This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
		</div>
	</div>
	<div class="container is-fullhd">
		<div>
			This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
		</div>
	</div>
</section>

<style>
	.hero {
		margin-top: 52px;
	}
</style>
