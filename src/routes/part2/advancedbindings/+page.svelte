<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import ComponentBindings from './ComponentBindings.svelte';
	import Contenteditable from './Contenteditable.svelte';
	import Dimensions from './Dimensions.svelte';
	import EachBlockBinding from './EachBlockBinding.svelte';
	import MediaElements from './MediaElements.svelte';
	import ThisBinding from './ThisBinding.svelte';
</script>

<Nav />

<h2>Advanced Bindings</h2>
<Contenteditable />
<hr />
<h2>Each Block Binding</h2>
<EachBlockBinding />
<hr />
<h2>Media Elements</h2>
<MediaElements />
<hr />
<h2>Dimension</h2>
<Dimensions />
<hr />
<h2>This Bindings</h2>
<ThisBinding />
<hr />
<h2>Component Bindings</h2>
<ComponentBindings />
<hr style="margin-top: 5rem;" />
