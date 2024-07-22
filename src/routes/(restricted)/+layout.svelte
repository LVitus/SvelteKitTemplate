<script>
	import Authentication from '$lib/modules/authentication/Authentication.svelte';
</script>

<header class="p-2">
	<nav class="flex items-center justify-between">
		<a href="/" class="text-xl font-semibold">Notes</a>
		<ul>
			<li><Authentication /></li>
		</ul>
	</nav>
</header>

<main class="flex-grow">
	<slot />
</main>

<footer></footer>

<style></style>
