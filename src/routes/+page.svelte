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
	import DOMEvents from './DOMEvents.svelte';
	import ModifiedEvent from './ModifiedEvent.svelte';
	import ComponentEvents from './ComponentEvents.svelte';
	import Outer from './Outer.svelte';

	import BigRedButton from './BigRedButton.svelte';
	import FormInputs from './FormInputs.svelte';

	// const audio = new Audio('./wow.mp3');
	//
	// function handleClick() {
	// 	audio.play();
	// }

	let name = 'meme';
	let src = 'meme.jpeg';

	const packageInfo = {
		name: 'svelte',
		speed: 'blazing',
		version: 3,
		website: 'https://svelte.dev'
	};

	function handleMessage(event: { detail: { text: any } }) {
		alert(event.detail.text);
	}
</script>

<input bind:value={name} />

<h1>Hello {name.toUpperCase()}!</h1>

<p>This is a paragraph!</p>

<FormInputs />

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

<!-- <DOMEvents /> -->

<br />
<ModifiedEvent />

<ComponentEvents on:message={handleMessage} />
<Outer on:message={handleMessage} />
<br />

<!-- <BigRedButton on:click={handleClick} /> -->

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
