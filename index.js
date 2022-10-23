require("dotenv").config();
const express = require("express");
const { mongoDb } = require("./config/db");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const categoryRoute = require("./routes/categories");
const collectionRoute = require("./routes/collection");
const nftRoute = require("./routes/nft");
const activityRoute = require("./routes/activity");
const offerRoute = require("./routes/offers");
const navBarRoute = require("./routes/cms/navbar");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoDb();
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/collections", collectionRoute);
app.use("/api/nfts", nftRoute);
app.use("/api/activity", activityRoute);
app.use("/api/offers", offerRoute);
app.use("/api/navbar", navBarRoute);
app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running");
});