<script lang="ts">
	import { Drawer, Button } from 'components';
	import Authentication from '$lib/modules/authentication/Authentication.svelte';
</script>

<Drawer class="flex min-w-40 flex-col border-r px-3 py-2">
	<a href="/" class="mb-2 text-xl font-medium">Sphere</a>
	<nav class="flex flex-grow flex-col gap-2">
		<Button class="w-full rounded border px-2 py-1 text-left">Dashboard</Button>
		<Button class="w-full rounded border px-2 py-1 text-left">Apps</Button>
		<a href="/servers">
			<Button class="w-full rounded border px-2 py-1 text-left">Servers</Button>
		</a>
		<Button class="w-full rounded border px-2 py-1 text-left">Community</Button>
	</nav>
	<Authentication />
</Drawer>
