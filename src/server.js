const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const accountRoutes = require("./routes/account-routes");

app.listen(PORT , () => {
 console.log("Server running on port 3000");
});

app.use(bodyParser.json());
app.use("/api/v1", accountRoutes);

app.get("/api", (req, res) => {
    res.json(["API Version 1.0"]);
});