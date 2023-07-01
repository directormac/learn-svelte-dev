<script lang="ts">
	import { count } from '../store';
	function decrement() {
		//TODO : reset the count
		count.update((current) => current - 1);
	}
</script>

<button on:click={decrement}> - </button>
