<script>
	import Footer from './../components/footer.svelte';
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<slot />
<Footer/>

<style>
	@import 'bulma/css/bulma.css';

	:root {
		--black: #323031;
		--yellow: #ffc857;
		--red: #db3a34;
		--blue: #084c61;
		--cyan: #177e89;
	}

	
</style>
