<script>
	import Authentication from '$lib/modules/authentication/Authentication.svelte';
</script>

<header class="p-2">
	<nav>
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
