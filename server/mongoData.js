import mongoose from "mongoose";

const chatAppSchema = mongoose.Schema({
  chatName: String,
  conversation: [
    {
      message: String,
      timestamp: String,
      user: {
        displayName: String,
        email: String,
        photoUrl: String,
        uid: String,
      },
    },
  ],
});

export default mongoose.model("conversations", chatAppSchema);
