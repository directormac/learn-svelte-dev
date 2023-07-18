<script>
	import Nav from '$lib/header/Nav.svelte';
	import Body from './Body.svelte';
	import Component from './Component.svelte';
	import Self from './Self.svelte';
	import Window from './Window.svelte';
	import WindowBindings from './WindowBindings.svelte';
</script>

<Nav />

<h2>Svelte Self</h2>
<Self />
<hr />
<Component />
<hr />
<h2>Window</h2>
<Window />
<hr />

<!-- <h2>Window Bindings</h2> -->
<!-- <div class="bindings"> -->
<!-- 	<WindowBindings /> -->
<!-- </div> -->

<h2>Body</h2>
<Body />
<hr />

<style>
	.bindings {
		height: 400vw;
		background: './deepsea.webp';
		background-size: cover;
	}
</style>
