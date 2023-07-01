<script lang="ts">
	let scoops = 1;
	let flavours: string[] = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<!-- If you have multiple type="radio" or type="checkbox" inputs relating to the same value, -->
<!-- you can use bind:group along with the value attribute. Radio inputs in the same group are  -->
<!-- mutually exclusive; checkbox inputs in the same group form an array of selected values. -->
<!-- Add bind:group={scoops} to the radio inputs... -->
<h2>Size</h2>

{#each [1, 2, 3] as number}
	<label
		><input type="radio" name="scoops" value={number} bind:group={scoops} />
		{number}
		{number === 1 ? 'scoop' : 'scoops'}
	</label>
{/each}
<h2>Flavours</h2>
<select multiple bind:value={flavours}>
	{#each ['cookies and cream', 'mint choco chip', 'raspberry ripple '] as flavour}
		<option>{flavour}</option>
		<!-- content here -->
	{/each}
</select>

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops}
		{scoops === 1 ? 'scoop' : 'scoops'}
		of {formatter.format(flavours)}
	</p>
{/if}
