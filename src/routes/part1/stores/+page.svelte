<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import CustomStore from './CustomStore.svelte';
	import DerivedStores from './DerivedStores.svelte';
	import ReadableStores from './ReadableStores.svelte';
	import StoreBindings from './StoreBindings.svelte';
	import WritableStores from './WritableStores.svelte';
</script>

<Nav />
<h1>Writable Stores</h1>
<WritableStores />
<hr />
<ReadableStores />
<hr />
<DerivedStores />
<hr />
<CustomStore />
<hr />
<StoreBindings />
