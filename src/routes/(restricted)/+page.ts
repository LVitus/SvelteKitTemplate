import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async (event) => {

    const data = await event.parent()
    const notes = (await data.db.surreal.query(`SELECT * FROM note`))[0];

    return { notes };
}) satisfies PageLoad;