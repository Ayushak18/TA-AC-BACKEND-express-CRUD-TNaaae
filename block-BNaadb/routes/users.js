let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.render('users', { user: user });
    }
  });
});

router.get('/new', (req, res) => {
  res.render('newUser');
});

router.post('/', (req, res) => {
  User.create(req.body, (error, data) => {
    if (error) {
      console.log(error);
      res.redirect('/users/new');
    } else {
      res.redirect('/users');
    }
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      res.render('oneUser', { user: user });
    }
  });
});

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  User.findById(id, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      res.render('updateUser', { user: user });
    }
  });
});

router.post('/:id', (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/users');
    }
  });
});

router.get('/:id/delete', (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/users');
    }
  });
});

module.exports = router;
