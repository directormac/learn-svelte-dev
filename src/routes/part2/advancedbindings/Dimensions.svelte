<script lang="ts">
	let width: number;
	let height: number;
	let size: number = 42;
	let text: string = 'Edit this text, might expand';
</script>

<label>
	<input type="range" bind:value={size} min="10" max="100" />
	font size({size}px)
</label>
<br />
<div bind:clientWidth={width} bind:clientHeight={height}>
	<span style="font-size: {size}px;" contenteditable>{text}</span>
	<span class="size">{width} x {height}px</span>
</div>

<style>
	div {
		position: relative;
		display: inline-block;
		padding: 0.5em;
		background: hsla(15, 100%, 50%, 0.1);
		border: 1px solid hsla(15, 100%, 50%);
	}

	.size {
		position: absolute;
		right: -1px;
		bottom: -1.4em;
		line-height: 1;
		background: hsla(15, 100%, 50%);
		color: white;
		padding: 0.2em 0.5em;
		white-space: pre;
	}
</style>
