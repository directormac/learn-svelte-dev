<script lang="ts">
	import Nav from '$lib/header/Nav.svelte';
	import SharingCode from './SharingCode.svelte';
	import { stopAll } from '$lib/components/media2/AudioPlayer.svelte';
	import TheDeubTag from './TheDeubTag.svelte';
</script>

<Nav />
<h2>Sharing code</h2>
<SharingCode />
<hr />
<h2>Exports</h2>
<button on:click={stopAll}> stop all </button>
<hr />
<h2>Miscellaneus</h2>
<TheDeubTag />
