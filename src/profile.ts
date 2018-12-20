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
        return new Promise<any>((resolve) => {
            const db: Database = new Database();
            db.insert(this).then((val) => {
                this.id = val.replace(/["']/g, "");
                resolve({ id: this.id });
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

    public match() {
        return new Promise<Profile>((resolve) => {
            const db: Database = new Database();
            db.findAll().then((val) => {
                let highMatch: Profile;

                // Initialize to a high value so you can
                // match to someone right off the bat
                let highValue: number = 100;

                if (typeof val === "object") {
                    val.forEach((obj: any) => {
                        const objID: string = JSON.stringify(obj._id).replace(/["']/g, "");

                        // Shouldn't match with yourself
                        // Lonely life otherwise
                        if (objID !== this.id) {
                            const scores = obj.scores;
                            let value = 0;
                            let i: number = 0;

                            for (i; i < scores.length; i++) {
                                value += Math.abs(scores[i] - this.scores[i]);
                            }

                            if (value < highValue) {
                                highValue = value;
                                highMatch = obj;
                            }
                        }
                    });
                }

                resolve(highMatch);
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}
