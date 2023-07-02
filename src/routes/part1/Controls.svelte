<script lang="ts">
	import { assetsTotal } from '$lib/store';
	import { Control } from './types';
	export let selected: string;
	export let action: Control;

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
	const removeFirst = () => {
		$assetsTotal.slice(1);
	};

	$: command = () => {
		switch (action) {
			case Control.AddOne:
				return addOne;
			case Control.RemoveFirst:
				return removeFirst;
			case Control.RemoveLast:
				return removeLast;
			default:
				return () => {};
		}
	};
</script>

<button on:click={command}>{selected}</button>
