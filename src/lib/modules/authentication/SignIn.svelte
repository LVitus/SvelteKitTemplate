<script lang="ts">
	import { session } from '$lib/database/session.svelte';
	import { Button, Input } from 'components';
	import { z } from 'zod';

	const { ses }: { ses: typeof session } = $props();

	const schema = z.object({
		email: z.string().email(),
		password: z.string()
	});

	const signIn = (e: SubmitEvent) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));

		const { success, data, error } = schema.safeParse(formData);
		if (success) {
			ses.signIn(data.email, data.password);
		} else {
			console.error(error.flatten().fieldErrors);
		}
	};
</script>

<form onsubmit={signIn} class="grid gap-2">
	<Input name="email" type="email" placeholder="Email" autocomplete="email" />
	<Input name="password" type="password" placeholder="Password" autocomplete="password" />
	<Button class="rounded border py-1">Sign In</Button>
</form>
