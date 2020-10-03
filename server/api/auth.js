const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const User = require("../models/User");
const authRoute = express.Router();

authRoute.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("user", ["firstName", "lastInitial", "email", "role"])
      .select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

authRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: [{ msg: "Invalid credentials." }],
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errors: [{ msg: "Invalid credentials." }],
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: config.get("expiresIn"),
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = authRoute;
