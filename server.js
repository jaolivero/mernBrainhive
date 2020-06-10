const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config");
const mongoose = require(".mongoose");

app.use(cors());
app.use(express.json());

const users = require("./routes/api/users");

app.use("/api/users", users);

mongoose.connect(
  config.mongoURI,
  {
    userNewUrlParser: true,
    useUnitfiedTopology: true,
    useCreateIndex: true,
  },
  () => console.log("connected to database")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
