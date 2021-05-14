let express = require('express');
let usersRoute = require('./routes/users');

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/users', usersRoute);

app.listen(4000, () => {
  console.log('Server is up');
});
