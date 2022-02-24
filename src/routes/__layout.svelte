<script>
	
	import Footer from './../components/footer.svelte';
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<slot />
<Footer />

<style>
	@import 'bulma/css/bulma.css';
</style>
