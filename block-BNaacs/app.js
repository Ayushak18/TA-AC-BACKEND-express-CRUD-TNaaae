let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(3000, () => {
  console.log('Server is up ');
});
