<script lang="ts">
	let m = { x: 0, y: 0 };
	let p = { x: 0, y: 0 };

	function handleMove(event: PointerEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</div>

<!-- <p -->
<!-- 	on:pointermove={(e) => { -->
<!-- 		p = { x: e.clientX, y: e.clientY }; -->
<!-- 	}} -->
<!-- > -->
<!-- 	The pointer is at {p.x} x {p.y} -->
<!-- </p> -->

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>
