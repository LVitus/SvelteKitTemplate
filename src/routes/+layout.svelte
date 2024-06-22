<script>
	import '../app.css';
</script>

<header>
	<nav>
		<ul class="flex justify-evenly">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<main class="flex-grow">
	<slot />
</main>

<footer class=" flex justify-center">
	<p>&copy; 2024</p>
</footer>

<style></style>
