<script lang="ts">
	import { slide } from 'svelte/transition';
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<label transition:slide>
	<input type="range" bind:value={i} max="10" />
</label>
{#each items.slice(0, i) as item}
	<div class="list" transition:slide|global>
		{item}
	</div>
{/each}

<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
</style>
