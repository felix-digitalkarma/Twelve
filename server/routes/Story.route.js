const express = require('express');
const storyRoute = express.Router();

const auth = require('../middleware/auth');
// const userModel = require('../models/User');
const storyModel = require('../models/Story');

// post api/stories
storyRoute.post('/', auth, async (req, res) => {
  try {
    const { title, body } = req.body;
    const newStory = new storyModel({
      user: req.user.id,
      title,
      body
    });
    const story = await newStory.save();
    res.json(story);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// get api/stories
storyRoute.get('/', async (req, res) => {
  try {
    const stories = await storyModel.find().populate('user', ['firstName', 'lastInitial', 'role', 'created']);
    res.json(stories);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// get api/stories/:id
storyRoute.get('/:id', async (req, res) => {
  const id = req.params.id;
  storyModel.findById(id).then(data => {
    if (!data) res.status(404).send({ msg: `Cannot find Story with id: ${id}!` });
    else res.send(data);
  }).catch(err => {
    res.status(500).send({ msg: `Error updating Story with id: ${id}!` });
  });
});

// To Update The Duck Details
storyRoute.put('/:id', auth, async (req, res, next) => {
  const id = req.params.id;
  storyModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot find Story with id: ${id}!`
      });
    } else res.send({ message: "Story was updated successfully." });
  }).catch(err => {
    console.log(err);
    res.status(500).send({
      message: `Error updating Story with id: ${id}!`
    });
  });
});

// delete api/stories/:id
storyRoute.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;
  storyModel.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          msg: `Cannot delete Story with id: ${id}.`
        });
      } else {
        res.send({
          msg: "Story was removed!"
        });
      }
    })
    .catch(err => {
      console.log(err);

      res.status(500).send({
        msg: `Cannot delete Story with id: ${id}.`
      });
    });
});

module.exports = storyRoute;
