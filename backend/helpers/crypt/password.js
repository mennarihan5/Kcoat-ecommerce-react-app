const crypto = require("crypto");
const { generate32ByteSalt } = require(".");
const mailSender = require ('../../service/user/mailService')
const jwt = require('jsonwebtoken')

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

module.exports = {
  hashPassword: (password) => {
    const salt = generate32ByteSalt();
    return {
      hash: crypto
        .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
        .toString(`hex`),
      salt: salt,
    };
  },
  verifyPassword: (password, hash, salt) => {
    return (
      crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`) ===
      hash
    );
  },
  sendOtp: async (req, res) => {
    const { email } = req.body;
    const otp = generateOtp();

    try {
      await mailSender(email, 'OTP Verification', `Your OTP is: ${otp}`);

      const token = jwt.sign({email, otp}, process.env.JWT_SECRET, {expiresIn: '5m'});

      return res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send OTP" });
    };
  },

  verifyOtp: async (req, res) => {
    const {otpToken, otp} = req.body;
    try{
      const decoded = jwt.verify(otpToken, process.env.JWT_SECRET);
      const {email, otp: decodedOtp} = decoded;
      if (decodedOtp !== otp){
        return res.status(400).json({error: 'Invalid Otp'});
      }
      return res.status(200).json({message: 'OTP verified successfully', email});
    }catch (error) {
      console.error(error);
      return res.status(400).json({error: 'Invalid OTP token'});
    }
  },
};
