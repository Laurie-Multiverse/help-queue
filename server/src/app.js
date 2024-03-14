const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/queues", require("./routes/queue"))

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
