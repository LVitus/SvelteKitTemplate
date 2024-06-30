<script lang="ts">
	import type { Session } from '$lib/database/session.svelte';
	import { Button, Input } from 'components';

	const { ses }: { ses: Session } = $props();

	let email = '';
	let password = '';

	$effect(() => console.log(email, password));
</script>

<Input bind:value={email} type="email" placeholder="Email" />
<Input bind:value={password} type="password" placeholder="Password" />
<Button onclick={() => ses.signIn(email, password)}>Sign In</Button>
