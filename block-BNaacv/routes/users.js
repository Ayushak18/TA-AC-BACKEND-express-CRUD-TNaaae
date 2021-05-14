let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.render('users', {
    userOne: 'Ayush',
    userTwo: 'Ankit',
    userThree: 'Suraj',
  });
});

router.get('/new', (req, res) => {
  res.render('userNew');
});

router.get('/:id', (req, res) => {
  res.render('userOne', { name: 'Ayush Kamboj' });
});

router.put('/:id', (req, res) => {
  res.render('userUpdated');
});

router.delete('/:id', (req, res) => {
  res.render('userDelete');
});

module.exports = router;
