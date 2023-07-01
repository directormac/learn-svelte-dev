<script lang="ts">
	import KeyedThings from './KeyedThings.svelte';

	let things: { id: number; name: string }[] = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}> Remove first thing</button>

{#each things as thing (thing.id)}
	<KeyedThings name={thing.name} />
{/each}
