<script lang="ts">
	import RedThing from '$lib/components/specialelements/RedThing.svelte';
	import BlueThing from '$lib/components/specialelements/BlueThing.svelte';
	import GreenThing from '$lib/components/specialelements/GreenThing.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'blue', component: BlueThing },
		{ color: 'green', component: GreenThing }
	];

	let selected = options[0];
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>
			{option.color}
		</option>
	{/each}
</select>

<svelte:component this={selected.component} />
