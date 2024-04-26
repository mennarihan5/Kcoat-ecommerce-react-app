const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
const passport = require("../backend/config/password-config");
const session = require("express-session");
const googleRoutes = require("../backend/routes/googleRoute");


// Loading environmental variables
require("dotenv").config({ path: ["./envs/.env"] });

//middlewae
//console.log(process.env);

const secretKey = process.env.SECRET_KEY;

//console.log("Generated Secret Key:", secretKey);




// Configure CORS options
const corsOptions = {
  origin: 'https://kcoat-ecommerce-react-app.vercel.app/', // Replace with the frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  // allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  // exposedHeaders: ['Content-Length'], // Specify headers exposed to the client
  // credentials: true, // Allow cookies and authorization headers with credentials
  // maxAge: 86400 // Specify the maximum age (in seconds) for preflight requests (OPTION method)
};






//middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(cors(corsOptions));


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
