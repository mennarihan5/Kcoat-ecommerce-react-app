const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const passport = require("../backend/config/passport-config");
const session = require("express-session");
//const googleRoutes = require("../backend/routes/googleRoute");


// Loading environmental variables
require("dotenv").config({ path: ["./envs/.env"] });



const secretKey = process.env.SECRET_KEY;

//console.log("Generated Secret Key:", secretKey);


//middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.use(
  session({
    secret: secretKey, // Change this to your own secret key
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());





//routers
// app.use((req, res, next) => {
//   res.locals.username = "myUsername";
//   next();
// });

// app.use((req, res, next) => {
//   console.log(res.locals.username);
//   next();
// });

app.use("/", require("./routes"));
app.use("/", require("../backend/routes/googleRoute")); 

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
