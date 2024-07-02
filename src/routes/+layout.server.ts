import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ cookies, url }) => {
    const token = cookies.get('token');

    if (!token && url.pathname !== '/unauthenticated') {
        return redirect(307, '/unauthenticated')
    } else if (token && url.pathname === '/unauthenticated') {
        return redirect(302, '/')
    }

    return {
        token
    };
});