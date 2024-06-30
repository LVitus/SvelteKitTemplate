<script lang="ts">
	import type { Session } from '$lib/database/session.svelte';
	import { Button } from 'components';

	const { ses }: { ses: Session } = $props();
</script>

<Button onclick={() => ses.signOut()}>Sign Out</Button>
