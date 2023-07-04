export function trapFocus(node: HTMLElement) {
	const previous = document.activeElement as HTMLElement;

	function focusable(): HTMLElement[] {
		return Array.from(
			node.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const current = document.activeElement as HTMLElement;

		const elements = focusable();
		const first = elements[0];
		const last = elements[elements.length - 1];

		if (event.shiftKey && current == first) {
			last.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current == last) {
			first.focus();
			event.preventDefault();
		}
	}

	focusable()[0]?.focus();

	node.addEventListener('keydown', handleKeydown);

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeydown);
			previous?.focus();
		}
	};
}
