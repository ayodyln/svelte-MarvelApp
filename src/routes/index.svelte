<script>
	import { apiDATA } from '../stores/apiCall.js';
</script>

<svelte:head>
	<title>Svelte Marvel API</title>
</svelte:head>

<h1>This is my first SvelteProject</h1>

{#each $apiDATA as data}
	<h3>{data}</h3>
{/each}

<style>
	h1 {
		color: red;
	}
</style>
