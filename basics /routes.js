const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("ContentType", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter a Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("CHUNK", chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const bodyParser = Buffer.concat(body).toString();
      const message = bodyParser.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("ContentType", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Server</title></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
