const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../middleware/auth');
const userModel = require('../models/User');
const userRoute = express.Router();

// all users
userRoute.get('/', auth, async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// create user
userRoute.post("/", async (req, res) => {
  const { firstName, lastInitial, email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new userModel({
      firstName,
      lastInitial,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// get specific user
userRoute.get('/:id', async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
      .populate('user', ['firstName', 'lastInitial', 'email', 'phone', 'role'])
      .select('-password');

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'User not found' });
    }
    res.status(500).send('Server Error');
  }
});

// stub routes for update user
// put
// delete

module.exports = userRoute;