import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async (data) => {
    const { db } = await data.parent();

    const servers = db.surreal.query<
        {
            name: string;
            ip: string;
            sshPort: string;
            username: string;
            password: string;
            kube: 'control' | 'worker';
        }[][]
    >(`SELECT * FROM server`);

    return { servers };
}) satisfies PageLoad;