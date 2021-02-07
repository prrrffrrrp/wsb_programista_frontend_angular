const http = require("http");

const handler = (request, response) => {
    response.end("<h1>Witamy w Polsce</h1>")
    console.log("Ktoś wszedł na stronę")
}

const server = http.createServer(handler);
const port = 3000;



server.listen(port, (err) => {
    if (err) { return console.log(err) }
    console.log(`serwer działa na porcie: ${port}`)
})
