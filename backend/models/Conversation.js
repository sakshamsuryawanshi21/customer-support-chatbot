const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: String, // "user" or "ai"
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const conversationSchema = new mongoose.Schema({
  conversation_id: String,
  messages: [messageSchema]
});

module.exports = mongoose.model("Conversation", conversationSchema);
