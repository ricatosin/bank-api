const express = require("express");
const config = require("./config/config")
const app = express();
const bodyParser = require("body-parser");
const accountRoutes = require("./routes/account-routes");

app.listen(config.PORT , () => {
 console.log("Server running on port 3000");
});

app.use(bodyParser.json());

app.use("/api/v1", accountRoutes, function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.type('application/json');
    next();
});

app.get("/api", (req, res) => {
    res.json(["API Version 1.0"]);
});