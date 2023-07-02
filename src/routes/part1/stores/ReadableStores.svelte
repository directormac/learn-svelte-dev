<script lang="ts">
	import { time } from '$lib/store';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	const timezone = new Intl.DateTimeFormat('en', {
		timeZoneName: 'longGeneric'
	});

	$: tz = timezone.format($time).split(' ').slice(1).join(' ');

	const fullFormat = new Intl.DateTimeFormat('fil-PH', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
		timeZone: 'Asia/Manila'
	});

	$: filWeekday = fullFormat.format($time).split(',')[0].trim();
	$: filMonth = fullFormat.format($time).split(' ')[1].trim();
</script>

<h1>Readable Store</h1>
<h1>The time is {formatter.format($time)}</h1>
<p>Your timezone is {tz}</p>
<p>Ngayong araw ay {filWeekday} buwan ng {filMonth} ng taon</p>
