const dotenv = require('dotenv');
dotenv.config();

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  connectDB = require('../config/db');

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/api/users', require('./routes/User.route'));
// app.use('/api/auth', require('./routes/Auth.route'));
app.use('/api/stories', require('./routes/Story.route'));


// build mode
if (process.env.NODE_ENV === 'development') {
  const staticDirectory = path.join(__dirname, '../frontend/public');
  app.use(express.static(staticDirectory));
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: staticDirectory });
  })
}

// production mode
if (process.env.NODE_ENV === 'production') {
  // _dirname + '/app/frontend/build/index.html'
  const staticDirectory = path.join(__dirname, '../frontend/build');
  app.use(express.static(staticDirectory));
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: staticDirectory });
  })
}

const PORT = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});