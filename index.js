const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routers/author");
const bookRoute = require("./routers/book")

dotenv.config();

mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("connected to MongoDB");
})

app.use(bodyParser.json({ limit: "50mb" })); //pars dạng json
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8000, () => {
    console.log("Server is running...");
});