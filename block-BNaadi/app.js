let express = require('express');
let mongoose = require('mongoose');
let indexRouter = require('./routes/index');
let userRouter = require('./routes/users');

mongoose.connect(
  'mongodb://localhost/userDiary',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.send('Page not found');
});

app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(5000, () => {
  console.log('Server is up and running');
});
