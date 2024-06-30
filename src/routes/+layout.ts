import type { LayoutLoad } from './$types';
import Surreal from "surrealdb.js";
import { PUBLIC_SURREAL_URL, PUBLIC_SURREAL_NAMESPACE, PUBLIC_SURREAL_DATABASE } from "$env/static/public";

export const ssr = false;

export const load: LayoutLoad = (async ({ data }) => {

    const db = new Surreal() as Surreal;

    await db.connect(PUBLIC_SURREAL_URL, {
        namespace: PUBLIC_SURREAL_NAMESPACE, // Company Name
        database: PUBLIC_SURREAL_DATABASE // App Name
    }).then(() => {
        console.log("✅ 👾 Connected you to SurrealDB 👾 ✅")
    }).catch((error: Error) => {
        console.log("❌ 👾 Error connecting to SurrealDB 👾 ❌", error);
    });

    let user = null;
    if (data.token) {
        console.log("✅ 🍪 Found JWT in Cookies 🍪 ✅");

        const authenticated = await db.authenticate(data.token);
        if (authenticated) {
            console.log("✅ 🔐 Authenticated you with JWT in SurrealDB 🔐 ✅");

            user = (await db.query(`SELECT * FROM account`))[0]
            if (user) {
                console.log("✅ 🤩 Found user data in SurrealDB 🤩 ✅", user);

            } else {
                console.log("❌ 🤔 No user data found in SurrealDB 🤔 ❌");
            }
        } else {
            console.log("❌ 🚫 JWT not authenticated in SurrealDB 🚫 ❌");
        }
    } else {
        console.log("❌ 🍪 No JWT found in Cookies 🍪 ❌");
    }


    return {
        db,
        user
    };
});