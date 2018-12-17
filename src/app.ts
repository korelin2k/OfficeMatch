import * as express from "express";
import * as exphbs from "express-handlebars";

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port);
