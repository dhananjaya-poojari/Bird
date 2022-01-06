import express from "express";
import cors from "cors";
import bodyParser  from "body-parser";
import multer from "multer";

import connectDB from "./Database/connection.js";
import postRoutes from "./routes/birds.js";
var upload = multer();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/birds", postRoutes);

const port = process.env.port || 5000;
connectDB().then(() => {
  app.listen(port, () => console.log("Server started on 5000"));
});
