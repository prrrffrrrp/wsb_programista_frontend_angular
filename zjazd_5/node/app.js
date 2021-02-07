const express = require("express");
const path = require("path")
const port = 3000;

const app = express();
app.set("view engine", "hbs")
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/about", function (req, res) {
    res.send("This is the about page");
})

app.listen(port, (err) => {
    if (err) { return console.log(err) }
    console.log(`Apka działa na porcie ${port}`)
})
