const { User } = require("../models").db;
const passwordHelper = require("../helpers/crypt/password");
const otpHelper = require("../helpers/otp");
const  mailSender = require("../service/user/mailService");

module.exports = {
  forgetPassword: async (req, res) => {
    const { email } = req.body;
    try {
      // Generate OTP
      const otp = otpHelper.generateOTP().value;

      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Store OTP in the database
      await user.update({ password_reset_otp: otp });

      // Send password reset email with OTP
      const emailBody = `Your OTP for password reset is: ${otp}`;
      await mailSender.mailsender(email, "Password Reset OTP", emailBody);

      res
        .status(200)
        .json({ message: "Password reset email sent successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "An error occurred while sending password reset email",
        });
    }
  },
  verifyOTP: async (req, res) => {
    const { email, otp } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "invalid otp" });
      }
      // Check if OTP exists and is not expired
      if (!user.password_reset_otp || user.password_reset_otp.Value !== otp || user.password_reset_otp.Expiry < new Date()) {
        return res.status(400).json({ error: "Invalid or expired OTP" });
      }

      res.status(200).json({ message: "OTP verified successfully" });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({ error: "An error occurred while verifying OTP" });
    }
  },

  resetPassword: async (req, res) => {
    const { email, newPassword } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update password
      const { hash, salt } = passwordHelper.hashPassword(newPassword);

      if (!hash || !salt) {
        throw new Error ("Error generating hash and salt for password");
      }

      await user.update({
        password: hash,
        password_salt: salt,
        password_reset_otp: null, // Clear OTP after password reset
      });

      res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ error: "An error occurred while changing the password" });
    }
  },


  changePassword: async (req, res) => {
    const { email, currentPassword, newPassword } = req.body;
    try {
      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Verify current password
      const isValidPassword = passwordHelper.comparePassword(currentPassword, user.password, user.password_salt);
      if (!isValidPassword) {
        return res.status(400).json({ error: "Invalid current password" });
      }

      // Update password
      const { hash, salt } = passwordHelper.hashPassword(newPassword);
      await user.update({
        password: hash,
        password_salt: salt,
      });

      res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while changing the password" });
    }
  },

};
