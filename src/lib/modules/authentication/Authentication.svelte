<script lang="ts">
	import { onMount } from 'svelte';
	import SignOut from './SignOut.svelte';
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';
	import { ses } from '$lib/database/session.svelte';

	$effect(() => {
		if (ses.token) localStorage.setItem('token', ses.token);
		if (ses.token === 'null') localStorage.removeItem('token');
	});

	onMount(async () => {
		await ses.authenticate(localStorage.getItem('token'));
	});

	let dialog: HTMLDialogElement;
</script>

{#if ses.token && ses.token !== 'null'}
	<SignOut />
{:else}
	<button onclick={() => dialog.showModal()}>Sign In/Up</button>
{/if}

<dialog bind:this={dialog}>
	<SignIn />
	<SignUp />
</dialog>
