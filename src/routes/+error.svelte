<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Error Page not found {$page.status} : {$page.error?.message}</h1>
