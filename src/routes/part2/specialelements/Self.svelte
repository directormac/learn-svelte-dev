<script>
	import Folder from '$lib/components/specialelements/Folder.svelte';
	import { files } from '$lib/components/specialelements/data';
</script>

<Folder name="Home" {files} expanded />
