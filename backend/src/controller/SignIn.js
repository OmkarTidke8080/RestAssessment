import Rest from "../model/restModel.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import nodemailer from "nodemailer";

import { generateAccessToken } from "../middleware/auth.js";
// import { validationResult } from "express-validator";

let otpStore = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omkartidke2016@gmail.com",
    pass: "wkbg zuzx xfwa dmil",
  },
});

export const verifyOtp = async (req, res) => {
  const { Email, otp } = req.body;

  try {
    if (otpStore[Email] && otpStore[Email] === otp) {
      // OTP is valid, remove it from the store
      delete otpStore[Email];

      // Generate tokens (optional, if needed for session management)
      const tokens = await generateAccessToken(Email);
      const accessToken = tokens.accessToken;
      const refreshToken = tokens.refreshToken;

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000, // 1 hour
        secure: true,
        sameSite: "Strict",
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        secure: true,
        sameSite: "Strict",
      });

      return res.status(200).json({ msg: "OTP verified. Login successful" });
    } else {
      return res.status(400).json({ msg: "Invalid OTP" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export const SignIn = async (req, res) => {
  try {

    
    const { Email, Password } = req.body;
      const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
       }

    // Find user by email
    const user = await Rest.findOne({ Email });
    if (!user) {
      return res.status(404).json({ msg: "Email not found" });
    }

    // Verify password
    const isMatch = bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[Email] = otp;

    // Send OTP via email
    transporter.sendMail(
      {
        from: "omkartidke2016@gmail.com",
        to: Email,
        subject: "Login OTP",
        text: `Your OTP for login is: ${otp}`,
      },
      (error, info) => {
        if (error) {
          return res.status(500).json({ msg: "Error sending OTP", error });
        }
        console.log("OTP sent:", info.response);
      }
    );

    res.status(200).json({ msg: "OTP sent to your email" });
  } catch (error) {
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

export default SignIn;
