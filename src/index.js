const express = require("express");
require("./db/mongoose");
const userRouter = require("./router/user");
const applyRouter = require("./router/apply");
const cors = require("cors")

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use(userRouter);
app.use(applyRouter); 

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
