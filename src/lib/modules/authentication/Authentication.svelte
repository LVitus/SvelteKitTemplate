<script lang="ts">
	import SignOut from './SignOut.svelte';
	import SignIn from './SignIn.svelte';
	import SignUp from './SignUp.svelte';
	import { page } from '$app/stores';

	const ses = $page.data.ses;

	let dialog: HTMLDialogElement;
	let hasAccount = $state(true);
</script>

{#if $page.data.user}
	<SignOut {ses} />
{:else}
	<button class="rounded border px-2 py-1" onclick={() => dialog.showModal()}>Sign In/Up</button>
{/if}

<dialog bind:this={dialog} class="rounded p-3">
	<div class="grid gap-2">
		{#if hasAccount}
			<SignIn {ses} />
		{:else}
			<SignUp {ses} />
		{/if}
		<button onclick={() => (hasAccount = !hasAccount)} class="text-xs">
			or {hasAccount ? 'Sign Up' : 'Sign In'}
		</button>
	</div>
</dialog>
