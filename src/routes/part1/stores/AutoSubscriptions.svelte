<script lang="ts">
	//	import { onDestroy } from 'svelte';
	import { count } from '$lib/store';
	import Incrementer from '$lib/components/Incrementer.svelte';
	import Decrementer from '$lib/components/Decrementer.svelte';
	import Resetter from '$lib/components/Resetter.svelte';

	// let count_value: number;
	// const unsubscribe = count.subscribe((value) => {
	// 	count_value = value;
	// });
	// onDestroy(unsubscribe);
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
