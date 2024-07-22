<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	let {
		note = { id: undefined, title: '', text: '', date: new Date() }
	}: { note?: { id?: string; title: string; text: string; date: Date } } = $props();
	let dialog: HTMLDialogElement;

	const createNote = async () => {
		await $page.data.db.surreal.query(
			`CREATE note CONTENT { title: $title, text: $text, date: $date, owner: $auth }`,
			{
				...note
			}
		);
		dialog.close();
		await invalidateAll();
	};

	const updateNote = async () => {
		try {
			await $page.data.db.surreal.query(
				`UPDATE $id.id MERGE { title: $title, text: $text, date: $date, owner: $auth }`,
				{
					...note
				}
			);
		} catch (error) {
			console.error(error.message);
		}
		dialog.close();
		await invalidateAll();
	};

	const deleteNote = async () => {
		await $page.data.db.surreal.query(`DELETE $id.id`, {
			...note
		});
		dialog.close();
		await invalidateAll();
	};
</script>

{#if note.id}
	<button onclick={() => dialog.showModal()} class="w-full text-left outline-none">
		<div class="rounded border px-3 py-2">
			<div class="flex items-end justify-between">
				<p class="text-xl font-medium">
					{note.title} <span class="text-sm text-neutral-500">{note.id}</span>
				</p>
				{#if note.date}
					<p class="text-neutral-500">
						in
						{Math.round((note.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
						Tagen am
						{note.date.toLocaleString('DE-de', {
							weekday: 'short',
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
							hour: '2-digit',
							minute: '2-digit'
						})}
					</p>
				{/if}
			</div>
			<p>{note.text}</p>
		</div>
	</button>
{:else}
	<button onclick={() => dialog.showModal()} class="rounded border px-2 py-1">New Note</button>
{/if}

<dialog bind:this={dialog} class="bg-transparent">
	<div class="rounded bg-white px-3 py-2">
		<p>{note.id ? 'Edit' : 'Create'} Note</p>
		<div>
			<label for="title">Title</label>
			<input bind:value={note.title} type="text" />
		</div>
		<div>
			<label for="text">Text</label>
			<input bind:value={note.text} type="text" />
		</div>
		<div>
			<label for="date">Date</label>
			<input bind:value={note.date} type="datetime" />
		</div>
		{#if note.id}
			<button onclick={deleteNote} class="rounded bg-red-400 px-2 py-1">Delete</button>
			<button onclick={updateNote} class="rounded border px-2 py-1">Update</button>
		{:else}
			<button onclick={createNote} class="rounded border px-2 py-1">Create</button>
		{/if}
	</div>
</dialog>
