<script lang="ts">
	export let name: string;

	// This is default key assignment if you need default values in your component
	// this value
	export let valuedName: string = 'NoGivenValue';
	// TODO: look into
	// Some sorcery is probably happening after the declaration
</script>

<p>exported name is {name}</p>
<p>exported valuedName is {valuedName}</p>
