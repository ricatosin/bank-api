const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const config = require("./config/serverconfig");
const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
 console.log("Server running on port 3000");
});

const accountController = require("./controllers/accountController");
app.use(bodyParser.json());
app.use("/api", accountController);

app.get("/api", (req, res) => {
    res.json(["API Version 1.0"]);
});