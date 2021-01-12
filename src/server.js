require("@babel/register")();

const express = require("express");
const app = express();

const render = require("./render").default;

app.get("/", (_req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>
          First app
        </title>
        <body>
          <div id="root">${render()}</div>
          <script src="/index.js"></script>
        </body>
      </head>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server start on 3000 port");
});
