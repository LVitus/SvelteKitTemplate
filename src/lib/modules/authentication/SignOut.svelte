<script lang="ts">
	import type { Session } from '$lib/database/session.svelte';
	import { Button } from 'components';

	const { ses }: { ses: Session } = $props();
</script>

<Button class="rounded border py-1" onclick={() => ses.signOut()}>Sign Out</Button>
