const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const userRoute = express.Router();
const auth = require('../middleware/auth');
const userModel = require('../models/User');

// @route    POST api/users
// @desc     Create user
// @access   Public
userRoute.post('/', async (req, res) => {
  const { firstName, lastInitial, email, phone, password, role } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new userModel({
      firstName,
      lastInitial,
      email,
      phone,
      password,
      role
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '5 days' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/users
// @desc     Get all users
// @access   Private
// TODO: replace auth
userRoute.get('/', auth, async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/users/:id
// @description Get user by user id
// @access      Private
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


module.exports = userRoute;