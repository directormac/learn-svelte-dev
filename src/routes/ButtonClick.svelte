<script lang="ts">
	let count = 0;

	// $: console.log(`the count is ${count}`);
	$: {
		console.log(`the count is ${count}`);
		console.log(`another log`);
	}

	$: if (count >= 10) {
		alert('hold down cowboy clicking spree?');
		count = 0;
	}

	$: doubled = count * 2;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
