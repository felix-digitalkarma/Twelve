const mongoose = require('mongoose');
const config = require('config');

const pro_mongoDB = config.get('PRO_MONGO');
const dev_mongoDB = config.get('DEV_MONGO');
// const local_mongo = config.get('LOCAL_MONGO');

let environment = process.env.NODE_ENV || 'development';
const db = environment === 'production' ? pro_mongoDB : dev_mongoDB;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`${environment} connected...`);
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
