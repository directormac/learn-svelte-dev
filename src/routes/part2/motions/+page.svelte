<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>
