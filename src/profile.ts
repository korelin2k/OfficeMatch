import * as assert from "assert";
import * as dotenv from "dotenv";
import * as mongo from "mongodb";

let mongoURI = "";
// Load in .env file if the application is not production
// i.e. not deployed to Heroku
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
    mongoURI = process.env.MONGODB_URI;
} else {
    mongoURI = process.env.MONGODB_URI;
}

export class Profile {

    constructor() {
        console.log("heys");
    }

    public add() {
        console.log("hey");
    }

    public remove() {
        console.log("hey");
    }
}
