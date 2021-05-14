let express = require('express');
let studentRoutes = require('./routes/student');

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/students', studentRoutes);

app.listen(4000, () => {
  console.log('Server is up');
});
