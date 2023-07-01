<script lang="ts">
	import { count } from '../store';
	function reset() {
		//TODO : reset the count
		count.set(0);
	}
</script>

<button on:click={reset}> reset </button>
