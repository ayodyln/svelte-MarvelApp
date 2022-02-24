<script>
	import { onMount } from 'svelte';
	onMount(() => {
		const navBtn = document.querySelector('.navbar-burger');
		const navMenu = document.querySelector('.navbar-menu');
		navBtn.addEventListener('click', () => {
			navBtn.classList.toggle('is-active');
			navMenu.classList.toggle('is-active');
		});

		const navStart = document.querySelector('.navbar-start').children;
		let myArr = Object.values(navStart);
		myArr.forEach((el) => {
			el.addEventListener('click', () => {
				navMenu.classList.toggle('is-active');
			});
		});
	});
</script>

<!-- <nav>
	<div class="logomark">
		<h1>Marvel API Project</h1>
	</div>
	<div class="nav">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</div>
</nav> -->

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<h1>Marvel API Project</h1>
		</a>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
			href="#"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="/"> Home </a>
			<a class="navbar-item" href="/about"> About </a>
		</div>
	</div>
</nav>

<style>
	.navbar-menu {
		position: absolute;
		width: 100%;
		z-index: 1;
	}
</style>
