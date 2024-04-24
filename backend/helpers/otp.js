// helpers/otp.js

module.exports = {
  generateOTP: () => {
    // Generate a random 6-digit OTP
    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();

    // Calculate the expiry time (e.g., 10 minutes from now)
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 10); // Expiry time is set to 10 minutes from now

    return { value: otpValue, expiry: expiryTime };
  },
};

