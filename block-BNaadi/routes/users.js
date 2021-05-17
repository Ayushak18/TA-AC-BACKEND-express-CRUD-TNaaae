let express = require('express');
let User = require('../models/user');

let router = express.Router();

router.post('/', (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) {
      return next(error);
    } else {
      res.redirect('users');
    }
  });
});

router.get('/', (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      next(error);
    } else {
      res.render('users', { users: users });
    }
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (error, user) => {
    if (error) {
      next(error);
    } else {
      res.render('singleUser', { user: user });
    }
  });
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (error, user) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/users/' + id);
    }
  });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (error, user) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/users');
    }
  });
});

module.exports = router;
