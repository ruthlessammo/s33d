const express    = require("express");
const morgan     = require("morgan");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const path       = require("path");
const port         = process.env.PORT || 8000;

let mongoUri = process.env.MONGODB_URI || "mongodb://localhost/s33d_db";

const app        = express();
// const router  = require("./config/routes");

mongoose.connect(mongoUri);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./public")));
// app.use("/api", router);

app.listen(port, () => console.log(`Express started on port: ${port}`));
