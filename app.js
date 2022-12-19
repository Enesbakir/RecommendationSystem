const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const movieRoute = require('./routers/movieRoute');
const userRoute = require('./routers/userRoute');
const pageRoute = require('./routers/pageRoute');
const authRoute = require('./routers/authRoute');


const app = express();

mongoose
  .connect('mongodb://localhost:27017/RecommenderSystemDB', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(session({
  secret: 'keybord_key',
  resave: false,
  saveUninitialized: true,
}))



app.use('/',pageRoute);
app.use('/movies', movieRoute);
app.use('/users', userRoute);
app.use('/auth',authRoute);



const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
