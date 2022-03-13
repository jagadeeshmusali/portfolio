import express = require("express");
import bodyParser = require("body-parser");
import cors = require('cors');
import {router as routerUsers} from "@portfolio/data-access-users";
import { router as routerHello } from "@portfolio/data-access-hello";
import { getWhitelistedOrigins } from "./whitelistedOrigins";
const port = process.env.PORT || 3000;

const app = express();
// middleware setup
app.use(bodyParser.json());
app.use(cors({norigin: getWhitelistedOrigins() }));
app.use(bodyParser.urlencoded({ extended: true }));

// routes setup
app.use("/api/users", routerUsers);
app.use("/api/hello", routerHello);
app.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


