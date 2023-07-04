<script>
	import Nav from '$lib/header/Nav.svelte';
	import { base } from '$app/paths';
	import { cubicOut } from 'svelte/easing';
	import { spring, tweened } from 'svelte/motion';
	import { writable } from 'svelte/store';
	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<Nav />

<h2>Motions</h2>

<progress value={$progress} />

<button on:click={() => progress.set(0)}> 0% </button>

<button on:click={() => progress.set(0.25)}> 25% </button>

<button on:click={() => progress.set(0.5)}> 50% </button>

<button on:click={() => progress.set(0.75)}> 75% </button>

<button on:click={() => progress.set(1)}> 100% </button>
<br />
<hr />
<a href="{base}/part2/motions/springs"><h1>Springs</h1></a>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>
