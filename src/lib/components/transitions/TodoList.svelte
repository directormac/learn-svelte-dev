<script lang="ts">
	import { send, receive } from './transition';
	import type { Todo } from './todo';
	export let store: Todo[];
	export let done: boolean;
</script>

<ul class="todos">
	{#each $store.filter((todo: Todo) => todo.done === done) as todo (todo.id)}
		<li class:done in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
			<label>
				<input
					type="checkbox"
					checked={todo.done}
					on:change={(e) => store.mark(todo, e.currentTarget.checked)}
				/>

				<span>{todo.description}</span>

				<button on:click={() => store.remove(todo)} aria-label="Remove" />
			</label>
		</li>
	{/each}
</ul>

<style>
	label {
		width: 100%;
		height: 100%;
		display: flex;
	}

	span {
		flex: 1;
	}

	button {
		background-image: url(./remove.svg);
	}
</style>
