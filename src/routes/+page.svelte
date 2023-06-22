<script lang="ts">
	import ButtonClick from './ButtonClick.svelte';
	import DeclaredProps from './DeclaredProps.svelte';
	import EachBlocks from './EachBlocks.svelte';
	import FancyButton from './FancyButton.svelte';
	import IfBlocks from './IfBlocks.svelte';
	import KeyedEachBlock from './KeyedEachBlock.svelte';
	import Nested from './Nested.svelte';
	import SpreadProps from './SpreadProps.svelte';
	import AwaitBlock from './AwaitBlock.svelte';
	let name = 'meme';
	let src = 'meme.jpeg';

	const packageInfo = {
		name: 'svelte',
		speed: 'blazing',
		version: 3,
		website: 'https://svelte.dev'
	};
</script>

<h1>Hello {name.toUpperCase()}</h1>

<p>This is a paragraph!</p>

<Nested />

<ButtonClick />

<FancyButton />

<SpreadProps {...packageInfo} />

<DeclaredProps name="svelte" valuedName="Override" />

<IfBlocks />

<EachBlocks />

<KeyedEachBlock />

<br />

<AwaitBlock />

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
