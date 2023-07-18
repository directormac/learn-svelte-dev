<script>
	import Nav from '$lib/header/Nav.svelte';
	import Document from './Document.svelte';
	import SvelteFragment from './SvelteFragment.svelte';
	import SvelteHead from './SvelteHead.svelte';
	import SvelteOptions from './SvelteOptions.svelte';
</script>

<Nav />

<h2>Document</h2>
<Document />
<hr />
<h2>Head</h2>
<SvelteHead />
<hr />
<h2>Options</h2>
<SvelteOptions />
<hr />
<h2>Fragments</h2>
<SvelteFragment />
