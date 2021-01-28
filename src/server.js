const express = require("express");
const config = require("./config/config")
const app = express();
const bodyParser = require("body-parser");
const accountRoutes = require("./routes/account-routes");

app.listen(config.PORT , () => {
 console.log("Server running on port 80");
});

app.use(bodyParser.json());

app.use("/", accountRoutes);

app.get("/api", (req, res) => {
    res.json(["API Version 1.0"]);
});