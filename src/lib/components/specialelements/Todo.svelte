<svelte:options immutable />

<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { flash } from './flash';
	import type { TodoType } from './flash';

	export let todo: TodoType;

	let element: HTMLElement;

	afterUpdate(() => {
		flash(element);
	});
</script>

<!-- the text will flash red whenever
     the `todo` object changes -->
<li bind:this={element}>
	<label>
		<input type="checkbox" checked={todo.done} on:change />
		{todo.text}
	</label>
</li>
