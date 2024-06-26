<script lang="ts">
	import { ses } from '$lib/database/session.svelte';
</script>

<button onclick={() => ses.signOut()}>Sign Out</button>
