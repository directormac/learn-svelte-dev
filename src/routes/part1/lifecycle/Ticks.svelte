<script lang="ts">
	import { tick } from 'svelte';

	let text: string = `Select some text and hit the tab key to toggle uppercase`;

	async function handleKeydown(input: Event) {
		const event = input as KeyboardEvent;

		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = event.target as HTMLTextAreaElement;
		const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		await tick();
		textarea.selectionStart = selectionStart;
		textarea.selectionEnd = selectionEnd;
	}
</script>

<textarea bind:value={text} on:keydown={handleKeydown} />

<style>
	textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>

