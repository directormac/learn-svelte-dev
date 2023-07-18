<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import NamedSlots from './NamedSlots.svelte';
	import SlotFallbacks from './SlotFallbacks.svelte';
	import SlotProps from './SlotProps.svelte';
	import Slots from './Slots.svelte';
</script>

<Nav />
<h2>Slots</h2>
<Slots />
<hr />
<h2>Named Slots</h2>
<NamedSlots />
<hr />
<h2>Slot Fallbacks</h2>
<SlotFallbacks />
<hr />
<h2>Slots props</h2>
<SlotProps />
