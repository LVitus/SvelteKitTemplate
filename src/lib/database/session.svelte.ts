
import { invalidateAll } from "$app/navigation";
import { Account } from "./account.svelte";
import { Database } from "./database.svelte";


class Session {
    database: Database;
    account: Account;

    constructor() {
        this.database = new Database();
        this.account = new Account();
    }

    init = async (token: string) => {
        await this.database.init(token);
    }

    signUp = async (email: string, password: string) => {
        const token = await this.database.surreal.signup({
            scope: 'user',
            email,
            password
        }).catch((err: Error) => {
            console.log(`Error: ${err}.`);
            return null;
        });
        if (token) {
            document.cookie = `token=${token}; path=/; max-age=31536000; samesite=strict; secure=true;`;
        } await invalidateAll();
    };

    signIn = async (email: string, password: string) => {
        const token = await this.database.surreal.signin({
            scope: 'user',
            email,
            password
        }).catch((err: Error) => {
            console.log(`Error: ${err.message}.`);
            return null;
        });
        if (token) {
            document.cookie = `token=${token}; path=/; max-age=31536000; samesite=strict; secure=true;`;
        }
        await invalidateAll();
    };

    signOut = async () => {
        await this.database.surreal.invalidate(); // Invalidate the authentication of the current connetion
        document.cookie = `token=''; path=/; max-age=-1;`;
        await invalidateAll();
    };
}

export const session = new Session();
