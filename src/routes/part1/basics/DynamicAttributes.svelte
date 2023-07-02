<script lang="ts">
	import fromLib from '$lib/assets/dancingman.gif';
	import thisFolder from './dancingman.gif';
	let src = '/dancingman.gif'; // from static folder
	let name = 'Rick Astley';
</script>

<img {src} alt="{name} dances." />
<img src={fromLib} alt="{name} dances." />
<img src={thisFolder} alt="{name} dances." />

<style>
	img {
		padding-top: 10px;
	}
</style>
