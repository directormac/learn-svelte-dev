<script lang="ts">
	let html = '<p>Contenteditable</p>';
</script>

<div bind:innerHTML={html} contenteditable />

<pre>{html}</pre>

<style>
	[contenteditable] {
		padding: 0.5em;

		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
