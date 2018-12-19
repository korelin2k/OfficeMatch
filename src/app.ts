import * as express from "express";
import * as exphbs from "express-handlebars";
import { Database } from "./database";
import { Profile } from "./profile";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home");
});

// Return profile
app.get("/api/profile/search/:first/:last", (req, res) => {
    const first = req.params.first;
    const last = req.params.last;

    const db = new Database();

    db.find(first, last).then((val) => {
        res.json(val);
    });
});

// Add Profile
app.post("/api/profile/add", (req, res) => {
    const body: Profile = req.body;

    const profile = new Profile(body);

    profile.add().then((val) => {
        res.status(200).end();
    });
});

// Return match
app.get("/api/profile/match", (req, res) => {
    const body: Profile = req.body;

    const profile = new Profile(body);

    profile.match().then((char) => {
        res.json(char);
    });
});

app.listen(port);
