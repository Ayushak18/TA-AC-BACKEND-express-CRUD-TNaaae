let express = require('express');
let User = require('../models/user');

let router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      console.log(error);
    } else {
      res.render('users', { users: users });
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
      res.render('singleUser', { user: user });
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
      res.redirect('/users/' + id);
    }
  });
});

router.get('/:id/delete', (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/users');
    }
  });
});

module.exports = router;
