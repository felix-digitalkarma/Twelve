const express = require('express');
const duckRoute = express.Router();
const auth = require('../middleware/auth');
let duckModel = require('../models/Duck');

// Get a list of ducks
duckRoute.get('/', auth, async (req, res) => {
  try {
    const ducks = await duckModel.find();
    res.json(ducks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// To Add New Duck
duckRoute.post('/', auth, async (req, res) => {
  let duck = new duckModel(req.body);
  duck.save()
    .then(resp => {
      res.status(200).json({ msg: 'Duck added successfully.', payload: resp });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Something Went Wrong');
    });
});

// To Get Duck Details By Duck ID
duckRoute.get('/:id', auth, async (req, res) => {
  const id = req.params.id;
  duckModel.findById(id).then(data => {
    if (!data) res.status(404).send({ msg: "Cannot find Duck with id:" + id });
    else res.send(data);
  }).catch(err => {
    res.status(500).send({ msg: "Error retrieving Duck with id=" + id });
  });
});

// To Update The Duck Details
duckRoute.put('/:id', auth, async (req, res, next) => {
  const id = req.params.id;
  duckModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot find Duck with id=${id}!`
      });
    } else res.send({ message: "Duck was updated successfully." });
  }).catch(err => {
    console.log(err);
    res.status(500).send({
      message: "Error updating Duck with id=" + id
    });
  });
});

// To Delete The Duck
duckRoute.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;
  duckModel.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          msg: `Cannot delete Duck with id=${id}. Maybe Duck was not found!`
        });
      } else {
        res.send({
          msg: "Duck was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        msg: "Could not delete Duck with id=" + id
      });
    });
});

module.exports = duckRoute;
