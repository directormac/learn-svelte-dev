<script lang="ts">
	import { name, greeting } from '$lib/store';
</script>

<h1>Store bindings</h1>
<h2>{$greeting}</h2>
<input value={$name} />

<button on:click={() => ($name += '!')}> Add exclamation mark! </button>
