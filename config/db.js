const mongoose = require("mongoose");
const mongoDb = async () => {
  const URI = process.env.DEV_MONGO_URI;

  console.log("URI", URI);
  try {
    let connection = mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    // console.log('connected mongodb',connection)
  } catch (err) {
    console.log("err", err);
  }
};
module.exports = {
  mongoDb,
};
