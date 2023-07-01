<script>
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';
	import Nav from '../../partials/Nav.svelte';

	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas?.getContext('2d');
		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<Nav />
<a href="/lifecycle/eliza">Before and After Lifecycle</a>
<br />
<h1>canvas below</h1>
<canvas width={32} height={32} />

<style>
	a {
		z-index: 10;
	}
	canvas {
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: '#666666';
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
</style>
