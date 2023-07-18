<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';

	import ButtonClick from './ButtonClick.svelte';
	import DynamicAttributes from './DynamicAttributes.svelte';
	import FancyButton from './FancyButton.svelte';
	import Nested from './Nested.svelte';

	let name = 'world';
</script>

<Nav />

<!-- Intro section  + reactivity -->

<!-- Binding name and transforming the string using generic toUpperCase() function -->
<h1>Hello {name.toUpperCase()}!</h1>

<!-- The {src} is a shorthand attribute which is the same as 
declaring src={src} not a good practice if its a multi image component
A11y: <img> element should have and always will have an alt attribute
-->
<DynamicAttributes />
<!-- Styling in svelte file which is scoped into this page only -->
<!-- check <style> tag below -->
<p>This is a paragraph!</p>

<!-- Nested component which has a string literal that has html tags with @html -->
<!-- Unsafe Do not use if avoidable bad practice -->
<Nested />

<!-- At the heart of Svelte is a powerful system of reactivity for keeping the DOM 
in sync with your application state — for example, in response to an event. -->
<ButtonClick />

<FancyButton />

<br />

<style>
	p {
		color: #72ccfd;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
