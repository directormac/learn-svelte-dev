<script lang="ts">
	export let name: string;
	export let version: number;
	export let speed: string;
	export let website: string;

	// Override props from parent so the parent isnt the only single source of truth
	// Can be an api call to check if what was passed by parents was correct etc . . .
	version = 4;

	// only fills href value if name is not null or changed ??? dk if this statement is true
	$: href = `https://www.npmjs.com/package/${name}`;
</script>

<p>
	The <code>{name}</code> package is {speed} fast. Download version {version} from
	<a {href}>npm</a> and <a href={website}>learn more here</a>
</p>
