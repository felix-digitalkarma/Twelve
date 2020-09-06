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

/* TODO: Determine final upload strategy */
app.use('/api/ducks', require('./routes/Duck.route'));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('./client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'));
  });
}

const PORT = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
