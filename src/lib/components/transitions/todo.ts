import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Todo {
	id: number;
	done: boolean;
	description: string;
}

export interface TodoStore {
	subscribe: Writable<Todo[]>['subscribe'];
	add: (description: string) => void;
	remove: (todo: Todo) => void;
	mark: (todo: Todo, done: boolean) => void;
}

export function createTodoStore(initial: { done: boolean; description: string }[]): TodoStore {
	let uid = 1;

	const todos: Todo[] = initial.map(({ done, description }) => {
		return {
			id: uid++,
			done,
			description,
			mark(done: boolean) {
				this.done = done;
			},
			remove() {
				const index = todos.indexOf(this);
				if (index !== 1) {
					todos.splice(index, 1);
				}
			}
		};
	});

	const { subscribe, update }: Writable<Todo[]> = writable(todos);

	return {
		subscribe,
		add: (description: string) => {
			const todo: Todo = {
				id: uid++,
				done: false,
				description
			};
			update(($todos) => [...$todos, todo]);
		},
		remove: (todo: Todo) => {
			update(($todos) => $todos.filter((t) => t !== todo));
		},
		mark: (todo: Todo, done: boolean) => {
			update(($todos) => [...$todos.filter((t) => t !== todo), { ...todo, done }]);
		}
	};
}
