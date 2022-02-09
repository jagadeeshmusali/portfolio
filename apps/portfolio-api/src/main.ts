import express = require("express");
import bodyParser = require("body-parser");
import {router} from "@portfolio/data-access-users";
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", router);
app.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

