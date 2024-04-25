// googleRoute.js

const express = require("express");
const passport = require("../config/password-config");
const tokenUtils = require("../helpers/auth/jwt"); // Import your token utilities file
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect or respond with tokens
    const tokens = tokenUtils.generateUserToken({ id: req.user.id });
    res.json(tokens);
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
