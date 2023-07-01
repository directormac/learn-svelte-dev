<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import ComponentEvents from './ComponentEvents.svelte';

	import ModifiedEvent from './ModifiedEvent.svelte';
	import Outer from './Outer.svelte';

	function handleMessage(event: { detail: { text: any } }) {
		alert(event.detail.text);
	}
</script>

<!-- <DOMEvents /> -->
<Nav />

<ModifiedEvent />
<p>Component Events</p>
<ComponentEvents on:message={handleMessage} />
<Outer on:message={handleMessage} />
