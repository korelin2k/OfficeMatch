import { Database } from "./database";

export class Profile {
    public firstName: string;
    public lastName: string;
    public photo: string;
    public scores: number[];
    public id: string;

    constructor(newProfile: any) {
        this.firstName = newProfile.firstName;
        this.lastName = newProfile.lastName;
        this.photo = newProfile.photo;
        this.scores = newProfile.scores;
    }

    public details() {
        const profile = {
            firstName: this.firstName,
            lastName: this.lastName,
            photo: this.photo,
            scores: this.scores,
        };

        return profile;
    }

    public add() {
        return new Promise<boolean>((resolve) => {
            const db: Database = new Database();
            db.insert(this.details()).then((val) => {
                this.id = val.replace(/["']/g, "");
                resolve(true);
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public remove() {
        return new Promise<boolean>((resolve) => {
            const db: Database = new Database();
            db.delete(this.id).then((val) => {
                resolve(val);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}
