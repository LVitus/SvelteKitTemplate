# Simple SvelteKit template using Svelte 5

  You can find the source code for this template at [GitHub]().

  This template includes a very basic layout, some packages and some other stuff that can be quite
  useful for production.

- Tailwind CSS

- Manifests for Kubernetes, including a manifest for a persistent SurrealDB instance and
   automatic tls. For that also apply the cert-manager to yout cluster
  - ``kubectl apply -f
    <https://github.com/cert-manager/cert-manager/releases/download/v1.15.0/cert-manager.yaml>``

- A Dockerfile and Dockercomposefile for development. Also starting a persistent SurrealDB
   instance
- SvelteKits node adapter is also added

Docs and additional information:

- [Svelte documentation](https://svelte.dev/)
- [SvelteKit documentation](https://kit.svelte.dev/)
- [Tailwind documentation](https://tailwindcss.com/)
- [SurrealDB documentation](https://www.surrealdb.com/)
- [Docker documentation](https://www.docker.com/)
- [Kubernetes documentation](https://kubernetes.io/)
