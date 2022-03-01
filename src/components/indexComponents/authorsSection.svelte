<a href="/">
	<div id="authorDiv">
		<div class="authorChild">
			<p class="is-size-3">Authors</p>
			<p id="info">The great authors of the Marvel Universe!</p>
		</div>
	</div>
</a>

<style lang="scss">
	div#authorDiv {
		background: no-repeat right/40%;
		border-radius: 1rem;
		div.authorChild {
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
		div.authorChild:hover {
			box-shadow: $red 0px 0px 10px;
		}
	}
</style>
