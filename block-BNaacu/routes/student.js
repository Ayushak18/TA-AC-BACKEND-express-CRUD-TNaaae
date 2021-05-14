let express = require('express');

let router = express.Router();

router.get('/new', (req, res) => {
  res.render('student');
});

router.post('/', (req, res) => {
  res.send('Student Created');
});

router.get('/', (req, res) => {
  res.render('student', { name: 'Ayush' });
});

module.exports = router;
