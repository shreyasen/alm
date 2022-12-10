import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const alreadyExistingUser = await User.findOne({ email });
    if (alreadyExistingUser) {
      res.status(406).json({ message: "User already exists!" });
    } else {
      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: encryptedPassword,
      });
      await newUser.save();
      res.status(201).json({ message: "user created successfully!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, email }, "secret", {
        expiresIn: "1h",
      });

      // save user token
      user.token = token;
      console.log(user.token);
      res.cookie("JWT-TOKEN", token);
      // user
      res.status(200).json({ accessToken: token });
    } else {
      res.status(403).send({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const email = req.userEmail;
  try {
    const userDetails = await User.findOne(
      { email },
      { firstName: 1, lastName: 1, email: 1 }
    );
    res.status(200).send(userDetails);
  } catch (error) {
    res.status(500).send({ message: "Internal Server error" });
  }
};
