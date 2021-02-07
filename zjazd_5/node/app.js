const functions = require("./functions")

const express = require("express");
const path = require("path")
const port = process.env.PORT || 3000;

const app = express();
app.set("view engine", "hbs")
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

const proba1 = "testing 1";
const proba2 = () => "testing 2";

app.get("/", function (req, res) {
    res.render("index", {
        title: "Zajęcia 07.02.2021",
        subTitle: functions.subTitle,
        proba1: proba1,
        proba2: proba2()
    });
})

app.get("/about", function (req, res) {
    res.render("about", {
        title_about: "wsb node about",
        subTitle_about: functions.subTitle_about
    });
})

app.listen(port, (err) => {
    if (err) { return console.log(err) }
    console.log(`Apka działa na porcie ${port}`)
})
