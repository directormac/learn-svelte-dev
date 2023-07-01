<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';

	export const prerender = true;

	import ButtonClick from './ButtonClick.svelte';
	import FancyButton from './FancyButton.svelte';
	import Nested from './Nested.svelte';

	let name = 'meme';
	let src = 'meme.jpeg';
</script>

<Nav />

<!-- Intro section  + reactivity -->

<!-- Binding name and transforming the string using generic toUpperCase() function -->
<h1>Hello {name.toUpperCase()}!</h1>

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

<!-- The {src} is a shorthand attribute which is the same as 
declaring src={src} not a good practice if its a multi image component
A11y: <img> element should have and always will have an alt attribute
-->

<img {src} alt="a {name} appears" height="600px" width="300px" />

<style>
	p {
		color: #72ccfd;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	img {
		padding-top: 10px;
	}
</style>
