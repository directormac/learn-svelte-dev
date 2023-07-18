<script lang="ts">
	type Todo = {
		text: string;
		done: boolean;
	};

	let todos: Todo[] = [
		{ text: 'Learn Svelte', done: true },
		{ text: 'Learn TypeScript', done: false },
		{ text: 'Learn GraphQL', done: false },
		{ text: 'finish svelte tutorial', done: false },
		{ text: 'ship something useful', done: false }
	];

	function add() {
		todos = todos.concat({ text: '', done: false });
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;
</script>

<div class="centered">
	<h1>todos</h1>

	<ul class="todos">
		{#each todos as todo, i}
			<li class:done={todo.done}>
				<input type="checkbox" bind:checked={todo.done} />
				<input type="text" bind:value={todo.text} placeholder="What needs to be done?" />
			</li>
		{/each}
	</ul>
	<p>{remaining} remaining</p>
	<button on:click={add}>add new</button>
	<button on:click={clear}>clear complete</button>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	.done {
		opacity: 0.4;
	}

	li {
		display: flex;
	}

	input[type='text'] {
		flex: 1;
		padding: 0.5em;
		margin: -0.2em 0;
		margin-bottom: 1rem;
		border: none;
	}
</style>
