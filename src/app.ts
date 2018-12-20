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

// Home Page
app.get("/", (req, res) => {
    res.render("home");
});

// Survey Page
app.get("/survey", (req, res) => {
    const questions = [
        "I love shrimp cocktails",
        "I love the video game Madden",
        "I freeze up when I consider the trolley problem",
        "I consider myself a good person",
        "I know and talk about famous people all the time",
        "I can write a computer program in no time",
        "I love dancing",
        "I love the idea of psychological torment",
        "I swear like a sailor",
        "I typically say the wrong word",
    ];

    const content = { questions };

    res.render("survey", content);
});

app.get("/match/:id", (req, res) => {
    const id = req.params.id;

    search(id).then((val) => {
        if (typeof val === "object") {
            const profile = new Profile(val);
            profile.id = id;
            profile.match().then((char) => {
                res.render("match", char);
            });
        } else {
            throw new Error();
        }
    }).catch(() => {
        res.status(404).send("Match Not Found - Well, that sucks");
    });
});

// Serve up static content
app.use("/static", express.static("static"));

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
        const id: string = (val.id);
        const matchURL: string = `/match/${id}`;

        res.redirect(matchURL);
    });
});

app.listen(port);
