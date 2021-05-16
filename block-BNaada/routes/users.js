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

module.exports = router;
