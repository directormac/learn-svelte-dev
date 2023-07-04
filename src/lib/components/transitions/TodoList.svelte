<script lang="ts">
	import { flip } from 'svelte/animate';
	import { send, receive } from './transition';
	import type { TodoStore, Todo } from './todo';
	export let store: TodoStore;
	export let done: boolean;

	$: filteredTodos = $store.filter((todo: Todo) => todo.done === done);
</script>

<ul class="todos">
	{#each filteredTodos as todo (todo.id)}
		<li
			class:done
			in:receive={{ key: todo.id }}
			out:send={{ key: todo.id }}
			animate:flip={{ duration: 200 }}
		>
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

	ul {
		list-style-type: none;
	}
</style>
