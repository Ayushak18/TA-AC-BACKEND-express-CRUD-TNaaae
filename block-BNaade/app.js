let express = require('express');
let mongoose = require('mongoose');
let userRouter = require('./routes/users');

mongoose.connect(
  'mongodb://localhost/UserBase',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database Connected');
    }
  }
);

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter);

app.listen(5000, () => console.log('Server is up'));
