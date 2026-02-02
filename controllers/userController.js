import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res.status(500).json({ message: "User already exist" });
  }
  if(!user){

  
  user = await User.create(req.body);
  }
  const token = jwt.sign(
    {
      userId: user._id,
      userEmail: user.email,
    },
    process.env.JSON_SECRET,
    { expiresIn: "24h" },
  );

  res.status(201).json({
    token,
    user: { id: user._id, email: user.email },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User does not exist" });
  }

  if (user.password !== password) {
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
  res.status(200).json({
    message: "welcome back",
    token,
    user: { id: user._id, email: user.email },
  });
};
