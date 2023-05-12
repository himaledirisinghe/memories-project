import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: Date,
});

postSchema.pre("save", function (next) {
  const now = new Date();
  this.createdAt = now;
  next();
});
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
