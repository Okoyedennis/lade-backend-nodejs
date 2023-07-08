const express = require("express");
require("./db/mongoose");
const userRouter = require("./router/user");
const applyRouter = require("./router/apply");
const donationRouter = require("./router/donation");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://lade-frontend.vercel.app"],
    credentials: true,
  })
);
app.use(userRouter);
app.use(applyRouter);
app.use(donationRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
