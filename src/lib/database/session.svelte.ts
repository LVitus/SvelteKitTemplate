import { invalidateAll } from "$app/navigation";
import type Surreal from "surrealdb.js";

export class Session {
    db: Surreal;

    constructor(db: Surreal) {
        this.db = db;
    }

    signUp = async (email: string, password: string) => {
        const token = await this.db.signup({
            scope: 'user',
            email,
            password
        }).catch((err: Error) => {
            console.log(`Error: ${err}.`);
            return null;
        });
        if (token) document.cookie = `token=${token}; path=/; max-age=31536000; samesite=strict; secure=true;`;
        await invalidateAll();
    };

    signIn = async (email: string, password: string) => {
        const token = await this.db.signin({
            scope: 'user',
            email,
            password
        }).catch((err: Error) => {
            console.log(`Error: ${err.message}.`);
            return null;
        });
        if (token) document.cookie = `token=${token}; path=/; max-age=31536000; samesite=strict; secure=true;`;
        await invalidateAll();
    };

    signOut = async () => {
        await this.db.invalidate(); // Invalidate the authentication of the current connetion
        document.cookie = `token=''; path=/; max-age=-1;`;
        invalidateAll();
    };
}