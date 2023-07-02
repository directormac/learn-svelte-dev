<script>
	import { createdCount } from '$lib/store';
</script>

<h1>Custom Store</h1>
<h2>The count is {$createdCount}</h2>

<button on:click={createdCount.increment}>+</button>
<button on:click={createdCount.decrement}>-</button>
<button on:click={createdCount.reset}>reset</button>
