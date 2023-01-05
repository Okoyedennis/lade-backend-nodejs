const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  //   use the line below to clear a warning on the console
  useUnifiedTopology: true,
  //   use the line below to clear a warning on the console
  useFindAndModify: false,
});
