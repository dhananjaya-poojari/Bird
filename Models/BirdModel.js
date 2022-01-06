import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name_en: String,
  name_kan: String,
  fileurls: [String]
});

var BirdModel = mongoose.model("Bird", postSchema);

export default BirdModel;
