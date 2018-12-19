import * as dotenv from "dotenv";
import * as mongo from "mongodb";
import { Profile } from "./profile";

export class Database {
    private mongoURI: string;
    private dbName: string;
    private dbCollection: string;

    constructor() {
        this.dbName = "heroku_pnrznt9v";
        this.dbCollection = "profiles";

        // Load in .env file if the application is not production
        // i.e. not deployed to Heroku
        if (process.env.NODE_ENV !== "production") {
            dotenv.config();
            this.mongoURI = process.env.MONGODB_URI;
        } else {
            this.mongoURI = process.env.MONGODB_URI;
        }

    }

    public insert(profile: Profile) {
        return new Promise<string>((resolve) => {
            mongo.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);
                    db.collection(this.dbCollection).insertOne(profile).then((val) => {
                        const insertId: string = JSON.stringify(val.insertedId);
                        client.close();
                        resolve(insertId);
                    });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    public update(profile: Profile) {
        return new Promise<boolean>((resolve) => {
            mongo.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);
                    const queryFind: any = {_id: new mongo.ObjectID(profile.id)};

                    db.collection(this.dbCollection).updateOne(queryFind, { $set: profile}).then((val) => {
                        client.close();
                        resolve(true);
                    });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    public find(id: string) {
        return new Promise<boolean | Profile[]>((resolve) => {
            mongo.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);
                    const queryFind: any = {_id: new mongo.ObjectID(id)};

                    db.collection(this.dbCollection).find(queryFind).toArray().then((val) => {
                        client.close();
                        resolve(val);
                    }).catch((err) => {
                        console.log(err);
                    });
                }).catch((err) => {
                    resolve(false);
                });
        });
    }

    public findAll() {
        return new Promise<Profile[]>((resolve) => {
            mongo.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);

                    db.collection(this.dbCollection).find({}).toArray().then((val) => {
                        client.close();
                        resolve(val);
                    });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    public delete(profile: Profile) {
        return new Promise<boolean>((resolve) => {
            mongo.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);
                    const queryObject: any = {_id: new mongo.ObjectID(profile.id)};

                    db.collection(this.dbCollection).deleteOne(queryObject).then((val) => {
                        client.close();
                        resolve(true);
                    });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }
}
