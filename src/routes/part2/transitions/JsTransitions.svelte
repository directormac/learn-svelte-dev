<script lang="ts">
	function typewriter(node: HTMLElement, { speed = 1 }: { speed?: number }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		} else {
			if (node.textContent !== null) {
				const text = node.textContent;
				const duration = (text.length / (speed * 0.01)) as number;

				return {
					duration,
					tick: (t: number) => {
						// const i = Math.trunc(text.length * t);
						const i = ~~(text.length * t);
						node.textContent = text.slice(0, i);
					}
				};
			} else {
				return {};
			}
		}
	}
</script>

<p transition:typewriter={{ speed: 1 }}>The quick brown fox jumps over the lazy dog</p>
