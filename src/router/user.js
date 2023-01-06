const express = require("express");
const Role = require("../enums/Role");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { auth, authPage } = require("../middleware/auth");
const { sendWelcomeEmail } = require("../emails/account");

router.post("/users", async (req, res, next) => {
  const user = new User(req.body);

  try {
    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "Email already exist in database" });
    }
    user.role = Role.BASIC;

    await user.save();
    sendWelcomeEmail(user.email, user.firstName);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Wrong username or password credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ message: "Wrong username or password credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await req.user.save();
    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.get("/user/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/users/all", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
