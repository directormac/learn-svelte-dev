<script lang="ts">
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const context = canvas.getContext('2d');
		if (!context) {
			throw new Error('2D rendering context not supported.');
		}

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<h1>onMount</h1>
<canvas bind:this={canvas} width={32} height={32} />

<style>
	canvas {
		position: relative;
		left: 0;
		top: 0;
		width: 500px;
		height: 600px;
		background-color: '#666666';
		mask: url(./svelte-logo-mask.svg) 20% 20% no-repeat;
		mask-size: 30vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 20% 20% no-repeat;
		-webkit-mask-size: 30vmin;
	}
</style>
