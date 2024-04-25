// passport-config.js

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models").db; // Import your user model

require("dotenv").config({ path: ["./envs/.env"] });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Check if the user already exists in the database
        let user = await User.findOne({
          where: { email: profile.emails[0].value },
        });

        // If user doesn't exist, create a new one
        if (!user) {
          user = await User.create({
            full_name: profile.displayName,
            email: profile.emails[0].value,
            // You may need to add other properties depending on your user model
          });
        }

        // Return the user object
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id); // Serialize user by ID
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user); // Deserialize user by ID
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
