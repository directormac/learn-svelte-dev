<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import ComponentStyles from './ComponentStyles.svelte';
	import ShorthandClassDirective from './ShorthandClassDirective.svelte';
	import StyleDirective from './StyleDirective.svelte';
	import TheClassDirective from './TheClassDirective.svelte';
</script>

<Nav />
<h2>The Class Directive</h2>
<TheClassDirective />
<hr />
<h2>Short Hand</h2>
<ShorthandClassDirective />
<hr />
<h2>The Style Directive</h2>
<StyleDirective />
<hr />
<h2>Component Styles</h2>
<ComponentStyles />
<hr />
