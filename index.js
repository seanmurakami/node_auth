const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");

dotenv.config();

const port = process.env.PORT || 3000;

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to db");
  }
);

//Middleware
app.use(express.json()); // Allows server to recognize the request body as a JSON object
//Route Middlware
app.use("/api/user", authRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
