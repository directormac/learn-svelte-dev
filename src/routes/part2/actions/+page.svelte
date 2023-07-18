<script>
	import Nav from '$lib/header/Nav.svelte';
	import Canvas from './Canvas.svelte';
	import { trapFocus } from './actions';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
</script>

<div class="seperator">
	<Nav />
</div>
<hr class="seprator" />
<div class="page-container">
	<div class="container" role="region">
		<div class="canvas-container">
			<Canvas color={selected} {size} />
		</div>

		{#if showMenu}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<div
				class="modal-background"
				on:click|self={() => (showMenu = false)}
				on:keydown={(e) => {
					if (e.key === 'Escape') showMenu = false;
				}}
				role="dialog"
				aria-modal="true"
			>
				<div class="menu" style="position: relative;" use:trapFocus>
					<div class="colors">
						{#each colors as color}
							<button
								class="color"
								aria-label={color}
								aria-current={selected === color}
								style="--color: {color}"
								on:click={() => {
									selected = color;
								}}
							/>
						{/each}
					</div>

					<label>
						small
						<input type="range" bind:value={size} min="1" max="50" />
						large
					</label>
				</div>
			</div>
		{/if}

		<div class="controls">
			<button class="show-menu" on:click={() => (showMenu = !showMenu)}>
				{showMenu ? 'close' : 'menu'}
			</button>
			<!-- <button on:click={() => canvas.clear()}>clear</button> -->
		</div>
	</div>
</div>

<style>
	.seprator {
		position: relative;
		z-index: 2;
	}

	.controls {
		position: absolute;
		left: 0;
		top: 0;
		padding: 1em;
	}
	.container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex; /* Added */
		flex-direction: column; /* Added */
		align-items: center; /* Added */
	}

	.canvas-container {
		padding-top: 10%;
		margin-top: 50px;
		flex: 1; /* Added */
		display: flex; /* Added */
		justify-content: center; /* Added */
		align-items: center; /* Added */
	}
	.show-menu {
		width: 5em;
	}

	.modal-background {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
	}

	.menu {
		position: relative;
		background: var(--bg-2);
		width: calc(100% - 2em);
		max-width: 28em;
		padding: 1em 1em 0.5em 1em;
		border-radius: 1em;
		box-sizing: border-box;
		user-select: none;
	}

	.colors {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 0.5em;
	}

	.color {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: none;
		filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
		transition: all 0.1s;
	}

	.color[aria-current='true'] {
		transform: translate(1px, 1px);
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
	}

	.menu label {
		display: flex;
		width: 100%;
		margin: 1em 0 0 0;
	}

	.menu input {
		flex: 1;
	}
	.page-container {
		width: 500px;
		height: 500px;
		margin: 20px auto;
		border: 1px solid #000;
	}
</style>
