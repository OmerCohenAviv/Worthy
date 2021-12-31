const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const diamondRoutes = require("./routes/diamond");

app.use("/diamond", diamondRoutes);

app.listen(3001, () => {
  console.log("server-running-on-port-3001");
});
