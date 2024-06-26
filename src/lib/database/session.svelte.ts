import type Surreal from "surrealdb.js";
import { db } from "./surreal";

class Session {
    db: Surreal;
    token: string | null = $state(null);

    constructor(db: Surreal) {
        this.db = db
    }

    signUp = async (email: string, password: string) => {
        this.token = await this.db.signup({
            scope: 'user',
            email,
            password
        }).catch((err: Error) => {
            console.log(`Error: ${err.message}.`);
            return null;
        });
        console.log('SignUp:', this.token);
    };

    signIn = async (email: string, password: string) => {
        this.token = await this.db.signin({
            scope: 'user',
            email,
            password
        }).catch((err: Error) => {
            console.log(`Error: ${err.message}.`);
            return null;
        });
        console.log('SignIn:', this.token);
    };

    authenticate = async (token: string | null) => {
        this.token = token;
        if (this.token) {
            await this.db.authenticate(this.token);
        }
    };

    signOut = async () => {
        this.token = 'null';
        await this.db.invalidate(); // Invalidate the authentication of the current connetion
    };
}

export const ses = new Session(db);