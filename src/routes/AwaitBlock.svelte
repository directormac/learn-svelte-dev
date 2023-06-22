<script lang="ts">
	const fetchPokemon = (async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
		return await response.json();
	})();
</script>

{#await fetchPokemon}
	<p>Waiting for pokemon</p>
{:then data}
	<p>{data.name}</p>
	<img src={data.sprites.front_default} alt="Pikachu" />
{:catch error}
	<p>{error} pokemon not found</p>
{/await}
