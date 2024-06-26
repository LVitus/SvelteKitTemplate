<script lang="ts">
	import { ses } from '$lib/database/session.svelte';

	let email = '';
	let password = '';
</script>

<input bind:value={email} type="email" placeholder="Email" />
<input bind:value={password} type="password" placeholder="Password" />
<button onclick={() => ses.signUp(email, password)}>Sign Up</button>
