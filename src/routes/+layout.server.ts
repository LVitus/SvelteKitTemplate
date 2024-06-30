import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ cookies }) => {
    console.log('layout.server.ts');

    return {
        token: cookies.get('token')
    };
});