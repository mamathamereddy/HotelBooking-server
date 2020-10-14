const express = require("express");
const mongoose = require("mongoose"); //importing mongoose
const bodyParser = require("body-parser");
const customerRouter = require("./routes/customers");
const roomsRouter = require("./routes/rooms");
const cors = require("cors");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8080;

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connecting to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("sucessfully connected to mongoose instance");
});
connection.on("error", (err) => {
  console.error("error in connecting", err);
});

//Routes
app.use("/customers", customerRouter);
app.use("/rooms", roomsRouter);

//start server
app.listen(port, () => {
  console.log(`connected to server on port:${port}`);
});
