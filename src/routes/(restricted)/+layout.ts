import { session } from '$lib/database/session.svelte';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = (async ({ data }) => {

    await session.init(data.token);

    return {
        ses: session,
        db: session.database,
        user: session.account
    };
});