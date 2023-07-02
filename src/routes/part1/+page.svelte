<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import { assetsTotal } from '$lib/store';
	import { afterUpdate, beforeUpdate } from 'svelte';
	let options: string[] = ['/pikachu.png', '/dancingman.gif'];
	let selected: string;
	$: assetLength = `The total assets rendered are ${$assetsTotal.length}`;
	const addOne = () => {
		$assetsTotal.push({
			id: $assetsTotal.length + 1,
			text: selected
		});
		$assetsTotal = $assetsTotal;
	};
	const removeLast = () => {
		$assetsTotal.pop();
		$assetsTotal = $assetsTotal;
	};
	const killMyBrowser = () => {
		const kill = 100;
		for (let i = 0; i < kill; i++) {
			$assetsTotal.push({
				id: $assetsTotal.length + 1,
				text: selected
			});
		}
		$assetsTotal = $assetsTotal;
	};

	let assetContainer: HTMLElement;
	let smoothScroll: boolean = false;

	// beforeUpdate(() => {
	// 	const scrollableDistance: number = assetContainer.scrollHeight - assetContainer.offsetHeight;
	// 	smoothScroll = assetContainer.scrollTop > scrollableDistance - 20;
	// });
	//
	// afterUpdate(() => {
	// 	if (smoothScroll) {
	// 		assetContainer.scrollTo({ top: assetContainer.scrollHeight, behavior: 'smooth' });
	// 	}
	// });
</script>

<Nav />
<h1>This is a show off of what i learned from part 1</h1>

<select bind:value={selected}>
	{#each options as option}
		<option> {option} </option>
	{/each}
</select>
<button on:click={addOne}>Add one</button>
<button on:click={removeLast}>Remove Last</button>
<button on:click={killMyBrowser}>Kill my browser</button>
<button
	on:click={() => {
		$assetsTotal = [];
		$assetsTotal = $assetsTotal;
	}}>Reset Count</button
>
<!-- {#if selected === 'pikachu'} -->
<!-- 	hey -->
<!-- 	<Controls action={Control.AddOne} {selected} /> -->
<!-- {:else if selected === 'dancingman'} -->
<!-- 	hey2 -->
<!-- 	<Controls action={Control.AddOne} {selected} /> -->
<!-- {/if} -->
{assetLength}
<hr />
<div bind:this={assetContainer}>
	{#each $assetsTotal as item (item.id)}
		<img src={item.text} alt={`id: ${item.id} text: ${item.text}`} width="100px" height="100px" />
	{/each}
</div>
