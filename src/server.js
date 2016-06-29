var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var path = require("path");
var config = require("./config.js");
var morgan = require("morgan");
var expressJwt = require("express-jwt");
var port = process.env.PORT || 8000;

mongoose.connect(config.database, function() {
    console.log("Connection to mongodb successful.");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static( __dirname, "..", "public" ));

app.use("/api", expressJwt({ secret: config.secret }));

app.use("/api/loans", require("./routes/loanRoutes"));
app.use("/auth", require("./routes/authRoutes"));

app.listen(port, function() {
    console.log("mortgage.app is listening on " + port);
});