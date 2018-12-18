import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

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
            MongoClient.connect(this.mongoURI, { useNewUrlParser: true })
                .then((client) => {
                    const db = client.db(this.dbName);
                    db.collection(this.dbCollection).insertOne(profile).then((val) => {
                        const insertId: string = JSON.stringify(val.insertedId);
                        client.close();
                        resolve(insertId);
                    });
                });
        });
    }

    public update() {
        console.log("Hi");
    }

    public find() {
        console.log("Hi");
    }

    public remove() {
        console.log("Hi");
    }
}
