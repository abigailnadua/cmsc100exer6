const express = require("express");
const app = express();
const port = 3000;

const router = require("./router");
router.Router(app);

app.listen(port, () => {
    console.log("Server started at port " + port);
});