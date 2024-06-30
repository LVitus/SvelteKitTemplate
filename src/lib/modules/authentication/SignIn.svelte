<script lang="ts">
	import type { Session } from '$lib/database/session.svelte';

	const { ses }: { ses: Session } = $props();

	let email = '';
	let password = '';
</script>

<input bind:value={email} type="email" placeholder="Email" />
<input bind:value={password} type="password" placeholder="Password" />
<button onclick={() => ses.signIn(email, password)}>Sign In</button>
