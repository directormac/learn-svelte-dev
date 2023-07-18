<script lang="ts">
	const titles = ['Svelte', 'React', 'Vue', 'Angular'];
	let selected = 0;
</script>

<svelte:head>
	<title>{selected}</title>
</svelte:head>
<h3>The title will change depends on what you select as title {selected}</h3>
<select bind:value={selected}>
	<option disabled>choose a title</option>
	{#each titles as title}
		<option>{title}</option>
	{/each}
</select>
