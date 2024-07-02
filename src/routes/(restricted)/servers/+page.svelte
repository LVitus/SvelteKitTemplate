<script lang="ts">
	import type { PageData } from './$types';
	import Server from '$lib/modules/server/Server.svelte';

	let { data }: { data: PageData } = $props();

	$effect(() => {
		data.servers.then((server) => console.log('This Spheres Servers', server));
	});
</script>

<p class="mx-3 my-2 rounded border border-pink-200 bg-pink-100 px-3 py-1 text-center">
	Here you can configure your Servers. You can add, remove, and edit them, aswell as the apps that
	run on them.
</p>

<div class="flex w-full flex-col gap-4 px-3 py-2">
	<div class="flex justify-between">
		<h1 class="text-3xl font-medium">Servers</h1>
		<Server />
	</div>

	{#await data.servers}
		<p>Loading...</p>
	{:then servers}
		{#if servers.at(0) && servers.at(0)!.length > 0}
			{#each servers.at(0)! as server}
				<Server {server} />
			{/each}
		{:else}
			<p>No servers found</p>
		{/if}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
