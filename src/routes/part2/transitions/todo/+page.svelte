<script lang="ts">
	import { createTodoStore } from '$lib/components/transitions/todo';
	import TodoList from '$lib/components/transitions/TodoList.svelte';
	import Nav from '$lib/header/Nav.svelte';
	import { afterUpdate } from 'svelte';

	const initialData = [
		{ done: false, description: 'write some docs' },
		{ done: false, description: 'start writing blog post' },
		{ done: true, description: 'buy some milk' },
		{ done: false, description: 'mow the lawn' },
		{ done: false, description: 'feed the turtle' },
		{ done: false, description: 'fix some bugs' }
	];

	let todos = createTodoStore([...initialData]);

	$: total = $todos.length;
	const reset = () => {
		todos = createTodoStore([]);
	};
	const repopulate = () => {
		todos = createTodoStore([...initialData]);
	};

	afterUpdate(() => {
		todos = todos;
	});
</script>

<Nav />
<div class="board">
	<h3>A todo the svelte way with Animations</h3>
	<input
		placeholder="what needs to be done?"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				todos.add(e.currentTarget.value);
				e.currentTarget.value = '';
			}
		}}
	/>

	<!-- TODO: Transition or animation bug -->
	<button on:click={repopulate}>Repoluate</button>
	<button on:click={reset}>Reset</button>

	<div class="todo">
		<h2>todo</h2>
		<TodoList store={todos} done={false} />
	</div>

	<div class="done">
		<h2>done</h2>
		<TodoList store={todos} done={true} />
	</div>
</div>
<h1 style="margin-top: 20;text-align: center;">Total of todos are {total}</h1>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		max-width: 56em;
		margin: 0 auto;
	}

	.board > input {
		font-size: 1.4em;
		grid-column: 1/3;
		padding: 0.5em;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
	}
</style>
