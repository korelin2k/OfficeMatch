import * as express from "express";
import * as exphbs from "express-handlebars";
import { search, searchAll } from "./helper";
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
app.get("/api/profile/search/:id", (req, res) => {
    const id = req.params.id;

    search(id).then((val) => {
        if (typeof val === "object") {
            res.json(val);
        } else {
            throw new Error();
        }
    }).catch(() => {
        res.status(404).send("Profile Not Found");
    });
});

// Return profile
app.get("/api/profile/all", (req, res) => {
    const id = req.params.id;

    searchAll().then((val) => {
        if (typeof val === "object") {
            res.json(val);
        } else {
            throw new Error();
        }
    }).catch(() => {
        res.status(404).send("No Profiles");
    });
});

// Add Profile
app.post("/api/profile/add", (req, res) => {
    const body: Profile = req.body;

    const profile = new Profile(body);

    profile.add().then((val) => {
        res.json(val);
    });
});

// Return match
app.get("/api/profile/match/:id", (req, res) => {
    const id = req.params.id;

    search(id).then((val) => {
        if (typeof val === "object") {
            const profile = new Profile(val);
            profile.id = id;
            profile.match().then((char) => {
                res.json(char);
            });
        } else {
            throw new Error();
        }
    }).catch(() => {
        res.status(404).send("Match Not Found - Well, that sucks");
    });
});

app.listen(port);
