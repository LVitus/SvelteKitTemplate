<script lang="ts">
	import { session } from '$lib/database/session.svelte';
	import { Button } from 'components';

	const { ses }: { ses: typeof session } = $props();
</script>

<Button class="rounded border px-2 py-1" onclick={() => ses.signOut()}>Sign Out</Button>
