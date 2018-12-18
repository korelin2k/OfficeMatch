import * as dotenv from "dotenv";
// import { MongoClient } from "mongodb";
import * as mongo from "mongodb";

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

    public insert(profile: any) {
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

    public update() {
        console.log("Hi");
    }

    public find() {
        console.log("Hi");
    }

    public delete(id: string) {
        return new Promise<boolean>((resolve) => {
            mongo.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);
                    const queryObject: any = {_id: new mongo.ObjectID(id)};

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
