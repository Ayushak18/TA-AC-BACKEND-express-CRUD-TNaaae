let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  res.send('Use /user/new to open form');
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
      res.send('User added');
    }
  });
});

module.exports = router;
