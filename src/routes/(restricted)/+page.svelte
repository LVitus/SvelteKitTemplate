<script lang="ts">
	import Note from '$lib/Note.svelte';

	let { data } = $props();
	const notes = data.notes.sort((a, b) => new Date(a.date) - new Date(b.date));
</script>

<div class="p-2">
	<Note />

	<ul class="mt-1 grid gap-1">
		{#each notes as note}
			<li><Note {note} /></li>
		{/each}
	</ul>
</div>

<span> # Heading 1 ## Heading 2 ### Heading 3 </span>
