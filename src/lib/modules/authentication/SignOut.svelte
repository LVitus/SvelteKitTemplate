<script lang="ts">
	import type { Session } from '$lib/database/session.svelte';

	const { ses }: { ses: Session } = $props();
</script>

<button onclick={() => ses.signOut()}>Sign Out</button>
