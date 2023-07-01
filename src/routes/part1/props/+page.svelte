<script>
	import Nav from '$lib/header/Nav.svelte';
	import DeclaredProps from './DeclaredProps.svelte';
	import SpreadProps from './SpreadProps.svelte';

	const packageInfo = {
		name: 'svelte',
		speed: 'blazing',
		version: 3,
		website: 'https://svelte.dev'
	};
</script>

<Nav />

<!-- Spreads can be used in props if the following component has the same values -->
<SpreadProps {...packageInfo} />

<DeclaredProps name="svelte" valuedName="Override" />
