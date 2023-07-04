<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="higher">
	<a href={base}>home</a>
	<div>
		<a href="{base}/part1/basics">basic</a>
		<a href="{base}/part1/props">props</a>
		<a href="{base}/part1/logic">logic</a>
		<a href="{base}/part1/events">events</a>
		<a href="{base}/part1/bindings">bindings</a>
		<a href="{base}/part1/lifecycle">lifecycles</a>
		<a href="{base}/part1/stores">stores</a>
		<a href="{base}/part1">summary</a>
	</div>
	<div>
		<a href="{base}/part2/motions">motions</a>
		<a href="{base}/part2/transitions">transitions</a>
		<a href="{base}/part2/transitions/todo">todo</a>
		<a href="{base}/part2/actions">actions</a>
		<a href="{base}/part2"> summary</a>
	</div>
</div>

<br />
<hr />

<style>
	.higher {
		z-index: 2;
	}
</style>
