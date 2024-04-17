const express = require("express");
const cors = require("cors");
require("./models");
const app = express();

//middlewae

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

//routers
app.use((req, res, next) => {
  res.locals.username = "myUsername";
  next();
});

app.use((req, res, next) => {
  console.log(res.locals.username);
  next();
});

app.use("/", require("./routes"));

//testing api

app.get("/", (req, res) => {
  res.json({ message: "active api" });
});

//port

const PORT = process.env.PORT || 3000;

//

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
