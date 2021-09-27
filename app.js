import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./controllers/contact.controller.js";
// import routes from "../mtree/startup/routes.js";
// const bodyParser=require('body-parser');
const app = express();
//Dot env
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//Connection to DB
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to db");
  }
);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", contactRoutes);
app.listen(port, function () {
  console.log("Server started on port", port);
});
