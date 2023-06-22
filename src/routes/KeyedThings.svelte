<script lang="ts">
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	export let name: string;

	const emoji = emojis[name as keyof typeof emojis];
</script>

<p>{emoji} = {name}</p>

