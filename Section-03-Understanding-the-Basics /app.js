// Core Modules
// - http: Launch a server, send request,
// - https: Launch a SSL server,
//  fs, path, os
const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000, console.log("Server is Running on port 3000"));
