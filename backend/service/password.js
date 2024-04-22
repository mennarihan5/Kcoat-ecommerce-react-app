const otpHelper = require("../helpers/otp");
const mailSender = require("../service/user/mailService");
const UserModel = require("../models/userModel");
const passwordHelper = require("../helpers/crypt/password");

module.exports = {
  forgetPassword: async (req, res) => {
    const { email } = req.body;
    try {
      // Generate OTP
      const otp = otpHelper.generateOTP();

      // Find user by email
      const user = await UserModel.findOne({ where: { email } });
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

  sendPasswordResetEmail: async (email) => {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) throw new Error("User not found");

    // Generate OTP
    const otp = otpHelper.generateOTP();

    // Store OTP in the database or cache
    // For simplicity, let's assume we have a field in the user model to store the OTP
    await user.update({ password_reset_otp: otp });

    // Send password reset email
    const emailBody = `Your OTP for password reset is: ${otp}`;
    await mailSender.sendMail(email, "Password Reset OTP", emailBody);
  },
  changePassword: async (userId, oldPassword, newPassword) => {
    const user = await UserModel.findByPk(userId);
    if (!user) throw new Error("User not found");

    if (
      !passwordHelper.verifyPassword(
        oldPassword,
        user.password,
        user.password_salt
      )
    ) {
      throw new Error("Incorrect old password");
    }

    const { hash, salt } = passwordHelper.hashPassword(newPassword);

    await user.update({ password: hash, password_salt: salt });
  },
};
