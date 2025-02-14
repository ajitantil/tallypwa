const https = require("https");
const filesystem = require("fs");

const options = {
  key: filesystem.readFileSync("key.pem"),
  cert: filesystem.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.end(filesystem.readFileSync("tallyLogin.html"));
  })
  .listen(8080, () => {
    console.log("HTTPS server running on https://localhost:8080");
  });
