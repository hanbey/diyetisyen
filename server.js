const express = require("express");
const app = express();
require("dotenv").config({ path: ".env" });
const bodyParser = require("body-parser");
const router = require("./app/router/index");


app.use(
  bodyParser.json({
    limit: "50mb"
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);

router(app);

app.listen(process.env.PORT, () => {
  console.log("Server Çalıştı :)");
});
