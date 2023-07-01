<script>
	import Nav from '$lib/header/Nav.svelte';
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';
	import Mounting from './Mounting.svelte';
	import Ticks from './Ticks.svelte';

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
<Ticks />
<br />
<hr />
<a href="/lifecycle/eliza">Before and After Lifecycle</a>
<br />
<Mounting />
