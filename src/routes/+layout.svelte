<script>
	import '../app.css';
	import Authentication from '$lib/modules/authentication/Authentication.svelte';
</script>

<header>
	<nav>
		<ul class="flex justify-evenly">
			<li><a href="/">Home</a></li>
			<li><Authentication /></li>
		</ul>
	</nav>
</header>

<main class="flex-grow">
	<slot />
</main>

<footer class="flex justify-center">
	<p>&copy; 2024</p>
</footer>

<style></style>
