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

    public add() {
        return new Promise<boolean>((resolve) => {
            const db: Database = new Database();
            db.insert(this).then((val) => {
                this.id = val.replace(/["']/g, "");
                resolve(true);
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public update() {
        return new Promise<boolean>((resolve) => {
            const db: Database = new Database();
            db.update(this).then((val) => {
                resolve(true);
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    public remove() {
        return new Promise<boolean>((resolve) => {
            const db: Database = new Database();
            db.delete(this).then((val) => {
                resolve(val);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}
