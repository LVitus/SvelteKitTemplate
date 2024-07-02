<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from 'components';
	import { z } from 'zod';

	let { server }: { server?: z.infer<typeof schema> } = $props();
	let kubeValue = server?.kube;
	let dialog: HTMLDialogElement;

	const schema = z.object({
		id: z.object({ tb: z.literal('server'), id: z.string() }).optional(),
		name: z.string(),
		ip: z.string(),
		sshPort: z.string(),
		username: z.string(),
		password: z.string(),
		kube: z.enum(['control', 'worker'])
	});

	const create = async (e: SubmitEvent) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));

		const { success, data, error } = schema.safeParse(formData);
		if (success) {
			try {
				const result = await $page.data.db.surreal.query(`CREATE server CONTENT $data`, { data });
				console.log(result);
				await invalidateAll();
			} catch (error) {
				console.log(error);
			}
		} else {
			console.error(error);
		}
	};

	const update = async (e: SubmitEvent) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));

		const { success, data, error } = schema.safeParse(formData);
		if (success) {
			try {
				const result = await $page.data.db.surreal.query(`UPDATE $server MERGE $data`, {
					server: server!.id,
					data
				});
				console.log(result);
				await invalidateAll();
			} catch (error) {
				console.log(error);
			}
		} else {
			console.error(error);
		}
	};

	const deleteServer = async () => {
		try {
			console.log(server?.id);

			const result = await $page.data.db.surreal.query(`DELETE $server`, {
				server: server!.id
			});
			console.log(result);
			await invalidateAll();
		} catch (error) {
			console.log(error);
		}
	};
</script>

{#if server}
	<Button onclick={() => dialog.showModal()} class="rounded border px-2 py-1">
		{server.name}
	</Button>
{:else}
	<Button onclick={() => dialog.showModal()} class="rounded border px-2 py-1">Add Server</Button>
{/if}

<dialog bind:this={dialog} class="rounded border px-3 py-2">
	<div class="flex justify-between text-lg font-medium">
		Server
		<Button
			onclick={() => {
				dialog.close();
			}}
		>
			X
		</Button>
	</div>
	<form onsubmit={server ? update : create} class="flex flex-col gap-2">
		<div>
			<label for="name">Name</label>
			<input name="name" value={server?.name} type="text" class="w-full rounded border p-1" />
		</div>
		<div>
			<label for="ip">IP</label>
			<input name="ip" value={server?.ip} type="text" class="w-full rounded border p-1" />
		</div>
		<div>
			<label for="sshPort">SSH Port</label>
			<input name="sshPort" value={server?.sshPort} type="text" class="w-full rounded border p-1" />
		</div>
		<div>
			<label for="username">Username</label>
			<input
				name="username"
				value={server?.username}
				type="text"
				class="w-full rounded border p-1"
			/>
		</div>
		<div>
			<label for="password">Password</label>
			<input
				name="password"
				value={server?.password}
				type="text"
				class="w-full rounded border p-1"
			/>
		</div>
		<div>
			<div class="font-medium">Kubernetes</div>
			<div class="grid grid-cols-2">
				<label for="kube">Control Node</label>
				<input
					bind:group={kubeValue}
					type="radio"
					placeholder="Configure as Kubernetes Control Node?"
					class="w-full rounded border p-1"
					name="kube"
					value="control"
				/>
			</div>
			<div class="grid grid-cols-2">
				<label for="kube">Worker Node</label>
				<input
					bind:group={kubeValue}
					type="radio"
					placeholder="Configure as Kubernetes Worker Node?"
					class="w-full rounded border p-1"
					name="kube"
					value="worker"
				/>
			</div>
		</div>
		{#if server}
			<Button class="w-full rounded border px-2 py-1" type="button" onclick={deleteServer}
				>Delete Server</Button
			>
		{/if}
		<Button class="w-full rounded border px-2 py-1">{server ? 'Update' : 'Add'} Server</Button>
	</form>
</dialog>
