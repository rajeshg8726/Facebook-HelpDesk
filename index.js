const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

const bodyParser = require('body-parser');

const fbDeskRoutes = require('./routes/fbRoutes');

const mongoose = require('mongoose');

// connection to database
mongoose
  .connect('mongodb://127.0.0.1:27017/fbDesk')
  .then(()=> console.log("Mongodb is connected"))
  .catch((err) =>console.log("Mongo error", err));


// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',fbDeskRoutes);

app.get('/',(req, res) => {
  res.render('login');
});

   
    
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
