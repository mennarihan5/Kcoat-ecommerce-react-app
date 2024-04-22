const userModel = require("../models/userModel");
const passwordHelper = require("../helpers/crypt/password");
const otpHelper = require("../helpers/otp");
const mailSender = require("../service/user/mailService");

module.exports = {
  forgetPassword: async (req, res) => {
    const { email } = req.body;
    try {
      // Generate OTP
      const otp = otpHelper.generateOTP();

      // Find user by email
      const user = await userModel.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Store OTP in the database
      await user.update({ password_reset_otp: otp });

      // Send password reset email with OTP
      const emailBody = `Your OTP for password reset is: ${otp}`;
      await mailSender.sendMail(email, "Password Reset OTP", emailBody);

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

  changePassword: async (req, res) => {
    const { email, otp, newPassword } = req.body;
    try {
      // Find user by email
      const user = await userModel.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Verify OTP
      if (user.password_reset_otp !== otp) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      // Update password
      const { hash, salt } = passwordHelper.hashPassword(newPassword);
      await user.update({
        password: hash,
        password_salt: salt,
        password_reset_otp: null,
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
