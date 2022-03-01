<a href="/">
	<div id="charDiv">
		<div class="charChild">
			<p class="is-size-3">Characters</p>
			<p id="info">Explore the characters of the Marvel Multiverse!</p>
		</div>
	</div>
</a>

<style lang="scss">
	div#charDiv {
		background: no-repeat right/40%;
		border-radius: 1rem;
        margin: 1rem 0;
		div.charChild {
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
		div.charChild:hover {
			box-shadow: $red 0px 0px 10px;
		}
	}
</style>
