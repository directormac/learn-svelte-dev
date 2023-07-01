<script lang="ts">
	import Nav from '../../partials/Nav.svelte';
	import GroupInput from './GroupInput.svelte';
	import SelectInput from './SelectInput.svelte';
	import TextareaInput from './TextareaInput.svelte';

	let name: string = 'name';
	let a = 1;
	let b = 2;
	let yes = false;
</script>

<Nav />

<!-- TEXT INPUTS -->
<h1>Hello {name}</h1>
<input bind:value={name} />

<br />

<!-- Numeric Inputs -->
<!-- In the DOM, everything is a string. That's unhelpful when you're dealing with numeric 
inputs — type="number" and type="range" — as it means you have to remember to coerce input.value 
before using it. -->
<!-- With bind:value, Svelte takes care of it for you: -->

<label>
	<input type="number" bind:value={a} min="0" max="13" />
	<input type="range" bind:value={a} min="0" max="13" />
</label>

<label>
	<input type="number" bind:value={b} min="0" max="13" />
	<input type="range" bind:value={b} min="0" max="13" />
</label>

<p>{a} + {b} = {a + b}</p>

<!-- CheckBox Input -->
<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
	<p>You must opt in to continue. If you're not paying, you're the product</p>
{/if}

<button disabled={!yes}>Subscribe</button>

<!-- Select Input -->
<SelectInput />

<!-- Group Input -->
<GroupInput />

<!-- Textarea Input -->
<!-- NOTE: Turns magical text area to a markedown syntax freaking awsome -->
<h2>Text area added 'markedjs'</h2>

<TextareaInput />

<style>
	h1 {
		/* font-size: 20px; */
		margin: 0px;
		margin-top: 10px;
	}
	input {
		margin-bottom: 10px;
	}
</style>
