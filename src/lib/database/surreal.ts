import Surreal from "surrealdb.js";
import { PUBLIC_SURREAL_URL, PUBLIC_SURREAL_NAMESPACE, PUBLIC_SURREAL_DATABASE } from "$env/static/public";

export const db = new Surreal();

await db.connect(PUBLIC_SURREAL_URL, {
    namespace: PUBLIC_SURREAL_NAMESPACE, // Company Name
    database: PUBLIC_SURREAL_DATABASE // App Name
}).then(() => {
    console.log("✅ 👾 Connected to SurrealDB 👾 ✅")
}).catch((error: Error) => {
    console.log("❌ 👾 Error connecting to SurrealDB 👾 ❌", error);
});