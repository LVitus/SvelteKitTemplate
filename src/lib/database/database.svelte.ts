import Surreal from "surrealdb.js";
import { PUBLIC_SURREAL_URL, PUBLIC_SURREAL_NAMESPACE, PUBLIC_SURREAL_DATABASE } from "$env/static/public";

export class Database {
    surreal: Surreal;
    private connected: boolean = false;
    private authenticated: boolean = false;

    constructor() {
        this.surreal = new Surreal();
    }

    init = async (token: string) => {
        if (!this.connected) await this.connect();
        if (!this.authenticated) await this.authenticate(token);
    }

    private connect = async () => {
        await this.surreal.connect(PUBLIC_SURREAL_URL, {
            namespace: PUBLIC_SURREAL_NAMESPACE, // Company Name
            database: PUBLIC_SURREAL_DATABASE // App Name
        }).then(() => {
            this.connected = true;
            console.log("✅ 👾 Connected you to SurrealDB 👾 ✅")
        }).catch((error: Error) => {
            this.connected = false;
            console.log("❌ 👾 Error connecting to SurrealDB 👾 ❌", error);
        });
    }

    private authenticate = async (token: string) => {
        if (token) {
            console.log("✅ 🍪 Found JWT in Cookies 🍪 ✅");

            const authenticated = await this.surreal.authenticate(token);
            if (authenticated) {
                this.authenticated = true;
                console.log("✅ 🔐 Authenticated you with JWT in SurrealDB 🔐 ✅", ((await this.surreal.query(`RETURN $auth FETCH auth;`))[0]));

            } else {
                this.authenticated = false;
                console.log("❌ 🚫 JWT not authenticated in SurrealDB 🚫 ❌");
            }
        } else {
            this.authenticated = false;
            console.log("❌ 🍪 Not able to authenticate because no JWT was found in Cookies 🍪 ❌");
        }
    }
}