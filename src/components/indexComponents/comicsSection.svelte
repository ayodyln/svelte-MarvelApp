<script>
	export let comicImage;
</script>

<a href="/comics" id="myCard">
	<div id="comicDiv" style="background-image: url({comicImage}.jpg);">
		<div class="comicChild">
			<p class="is-size-3">Comics</p>
			<p id="info">Marvel comics are plentiful, pick one to start reading!</p>
		</div>
	</div>
</a>

<style lang="scss">
	div#comicDiv {
		background: no-repeat right/40%;
		border-radius: 1rem;
		margin-bottom: 1rem 0;
		div.comicChild {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 100%;
			background: linear-gradient(to right, rgb(26, 26, 26) 60%, rgba(0, 0, 0, 0) 100%);
			padding: 1rem;
			color: white;
			border-radius: 1rem;

			p#info {
				width: 15rem;
			}
		}
		div.comicChild:hover {
			box-shadow: $red 0px 0px 10px;
		}
	}

	@media only screen and (min-width: 560px) {
		a {
			flex-basis: 33.33%;
		}
		div#comicDiv {
			margin-bottom: 0;
			background: top/100% no-repeat;

			height: 20rem;

			div.comicChild {
				background: linear-gradient(to top, rgb(26, 26, 26) 50%, rgba(0, 0, 0, 0) 100%);
				justify-content: flex-end;

				p#info {
					width: 100%;
				}
			}
		}
	}
</style>
