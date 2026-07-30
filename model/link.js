import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shorturl: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Link ||
  mongoose.model("Link", LinkSchema);