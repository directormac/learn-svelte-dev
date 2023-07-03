<script lang="ts">
	import { elasticOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	interface TransitionOptions {
		duration: number;
	}

	function spin(
		node: HTMLElement,
		{ duration }: TransitionOptions
	): { duration: number; css: (t: number) => string } {
		return {
			duration,
			css: (t: number): string => {
				const eased: number = elasticOut(t);

				return `
          transform: scale(${eased}) rotate(${eased * 1080}deg);
          color: hsl(
            ${Math.trunc(t * 360)},
            ${Math.min(100, 1000 * (1 - t))}%,
            ${Math.min(50, 500 * (1 - t))}%
          );`;
			}
		};
	}
</script>

<div class="centered" in:spin={{ duration: 8000 }} out:fade>
	<span>transitions!</span>
</div>

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>
