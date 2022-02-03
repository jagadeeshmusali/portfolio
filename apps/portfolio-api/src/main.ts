import express = require("express");
import bodyParser = require("body-parser");
import {router} from "@portfolio/data-access-users";
const port = process.env.PORT;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

