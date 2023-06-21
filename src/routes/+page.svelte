<script lang="ts">
	import ButtonClick from './ButtonClick.svelte';
	import Nested from './Nested.svelte';
	let name = 'meme';
	let src = 'meme.jpeg';
</script>

<h1>Hello {name.toUpperCase()}</h1>

<p>This is a paragraph!</p>

<Nested />

<ButtonClick />
<br />
<img {src} alt="a {name} appears" height="600px" width="300px" />

<style>
	p {
		color: #ffaa11;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	img {
		padding-top: 10px;
	}
</style>
