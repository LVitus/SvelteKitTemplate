<div class="prose mx-auto max-w-5xl">
	<h1>Simple SvelteKit template using Svelte 5</h1>
	<p>
		You can find the source code for this template at <a href="#">GitHub</a>.
	</p>
	<p>
		This template includes a very basic layout, some packages and some other stuff that can be quite
		useful for production.
	</p>
	<ul>
		<li>Tailwind CSS</li>
		<li>
			Manifests for Kubernetes, including a manifest for a persistent SurrealDB instance and
			automatic tls. For that also apply the cert-manager to yout cluster <code
				>kubectl apply -f
				https://github.com/cert-manager/cert-manager/releases/download/v1.15.0/cert-manager.yaml</code
			>
		</li>
		<li>
			A Dockerfile and Dockercomposefile for development. Also starting a persistent SurrealDB
			instance
		</li>
		<li>SvelteKits node adapter is also added</li>
	</ul>
	<h2>Docs and additional information:</h2>
	<ul>
		<li><a href="https://svelte.dev/">Svelte documentation</a></li>
		<li><a href="https://kit.svelte.dev/">SvelteKit documentation</a></li>
		<li><a href="https://tailwindcss.com/">Tailwind documentation</a></li>
		<li><a href="https://www.surrealdb.com/">SurrealDB documentation</a></li>
		<li><a href="https://www.docker.com/">Docker documentation</a></li>
		<li><a href="https://kubernetes.io/">Kubernetes documentation</a></li>
	</ul>
</div>
