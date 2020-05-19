const express = require("express");
const mongoose = require("mongoose");
const app = express();
const circusRoutes = require("./routes/circus.routes.jsx");
// Connection for Mongoose
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/wild-circus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

app.use(express.json());

app.use("/wild-circus", circusRoutes);

app.listen(5000, () => {
  console.log("app is running on 5000");
});
