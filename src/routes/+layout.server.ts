import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    console.log('layout.server.ts');

    return {
        token: cookies.get('token')
    };
}) satisfies LayoutServerLoad;