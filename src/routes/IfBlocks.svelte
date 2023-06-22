<script lang="ts">
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}> Clicked {count} {count === 1 ? 'time' : 'times'}</button>

{#if count > 5}
	<p>{count} is greater than 5</p>
{:else if count === 3}
	<p>{count} is equal to 3</p>
{:else}
	<p>{count} is between 0 and 5</p>
{/if}
