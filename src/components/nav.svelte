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
				navBtn.classList.toggle('is-active');
				navMenu.classList.toggle('is-active');
			});
		});
	});
</script>

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item logo" href="/">
			<h1 class="is-size-5">Marvel API Project</h1>
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
			<a class="navbar-item" href="/project"> Project </a>
			<a class="navbar-item" href="/doc"> Doc </a>
		</div>
	</div>
</nav>

<style lang="scss">
	nav {
		background-color: $red;
	}

	.navbar-burger:hover {
		color: rgb(180, 179, 179);
	}

	.navbar-menu {
		background-color: $red;
	}

	a {
		color: white;
	}
	a.navbar-item:hover {
		color: $red;
	}

	a.logo:hover {
		h1 {
			color: white;
		}
	}

	/* @media only screen and (min-width: 560px) {
	}

	@media only screen and (min-width: 1024px) {
	} */
</style>
