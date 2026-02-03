import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        userId: user._id,
        userEmail: user.email,
      },
      process.env.JSON_SECRET,
      { expiresIn: "24h" },
    );

    // res.status(201).json({
    //   token,
    //   user: { id: user._id, email: user.email },
    // });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "faild to create a new user", error: err });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        userEmail: user.email,
      },
      process.env.JSON_SECRET,
      { expiresIn: "24h" },
    );
    // res.status(200).json({
    //   message: "welcome back",
    //   token,
    //   user: { id: user._id, email: user.email },
    // });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "welcome back",
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "failed to sign in", error: err });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};
