<script>
	import Sidebar from '$lib/modules/sidebar/Sidebar.svelte';
</script>

<header></header>

<main class="flex flex-grow">
	<Sidebar />
	<div class="flex w-full flex-col">
		<slot />
	</div>
</main>

<footer></footer>

<style></style>
