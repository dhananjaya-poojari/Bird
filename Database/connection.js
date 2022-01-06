import mongoose from "mongoose";

const uri =
  "mongodb+srv://eaadmin:P@ssw0rd@cluster0.e90y8.mongodb.net/BirdData?retryWrites=true&w=majority";

//const uri =process.env.DATABASE_URL;
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectDB = async () => {
  await mongoose.connect(uri, options);
  console.log("db connected");
};

export default connectDB;
