<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import { fade, fly } from 'svelte/transition';
	import CssTransitions from './CssTransitions.svelte';
	import JsTransitions from './JsTransitions.svelte';
	import TransitionEvents from './TransitionEvents.svelte';
	import GlobalTransitions from './GlobalTransitions.svelte';
	import KeyBlocksTransitions from './KeyBlocksTransitions.svelte';
	let visible = false;
</script>

<Nav />
<h2>Transitions</h2>
<label> <input type="checkbox" bind:checked={visible} />visible</label>

{#if visible}
	<p transition:fade>Fades in and out</p>
	<p transition:fly={{ y: 200, duration: 2000 }}>Fly from bot in and out</p>
	<p transition:fly={{ x: 200, duration: 2000 }}>Fly right bot in and out</p>
	<p in:fly={{ y: 200, duration: 2000 }} out:fade>Fly in, Fade out</p>
	<CssTransitions />
	<JsTransitions />
	<TransitionEvents />
	<GlobalTransitions />
	<KeyBlocksTransitions />
{/if}
