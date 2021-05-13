let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('school');
});

app.listen(3000, () => {
  console.log('Server is up ');
});
