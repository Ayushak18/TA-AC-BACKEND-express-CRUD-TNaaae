let express = require('express');
let mongoose = require('mongoose');
let userRouter = require('./routes/user');

mongoose.connect(
  'mongodb://localhost/userDiaryThree',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected to Database');
    }
  }
);

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.use('/users', userRouter);

app.listen(5000, () => {
  console.log('Server is up at port 5000');
});
