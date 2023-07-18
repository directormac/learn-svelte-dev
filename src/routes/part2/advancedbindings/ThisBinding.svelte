<script lang="ts">
	import { onMount } from 'svelte';
	import { paint } from './gradient';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		if (!canvas) {
			throw new Error('Canvas element not found.');
		}
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

<canvas bind:this={canvas} width={32} height={32} />

<style>
	canvas {
		position: relative;
		left: 0;
		top: 0;
		width: 300px;
		height: 400px;
		background-color: '#666666';
		mask: url(./svelte-logo-mask.svg) 20% 20% no-repeat;
		mask-size: 30vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 20% 20% no-repeat;
		-webkit-mask-size: 30vmin;
	}
</style>
