import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    const response = await resolve(event);

    // Set security and caching headers
    // response.headers.set("cache-control", "public, max-age=3600");

    return response;
}