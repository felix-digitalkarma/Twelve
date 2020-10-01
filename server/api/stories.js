const express = require('express');
const router = express.Router();

const Story = require('../models/Story');

router.get('/', (req, res) => {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => console.log(err));
})

router.post('/', (req, res) => {
  const { title, body } = req.body;

  const newStory = new User({
    title, body
  });

  newStory.save()
    .then(() => res.json({
      message: "Created story successfully."
    }))
    .catch(err => res.status(400).json({
      "error": err,
      "message": "Error creating story"
    }))
});

module.exports = router