import { writable, readable, derived, type Writable } from 'svelte/store';

//Writable store
export const count = writable(0);

// Readable Store
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	});

	return function stop() {
		clearInterval(interval);
	};
});

// Derived Store

export const time2 = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
const start = new Date();

export const elapsed = derived(time2, ($time) =>
	Math.round(($time.getTime() - start.getTime()) / 1000)
);

// Custom Store
//
function createCount() {
	const { subscribe, set, update } = writable(0);
	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => {
			set(0);
		}
	};
}

export const createdCount = createCount();

// Store Bindings

export const name = writable('world');

export const greeting = derived(name, ($name) => `Hello ${$name}!`);

// Part 1 Summary

export interface Selection {
	id: number;
	text: string;
}
export const assetsTotal: Writable<Selection[]> = writable([
	{ id: 0, text: '/pikachu.png' },
	{ id: 1, text: '/dancingman.gif' }
]);
