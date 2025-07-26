// controllers/chatController.js

exports.handleChat = async (req, res) => {
  console.log("Chat route hit"); // ✅ Should log when POST request is received

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  res.status(200).json({ reply: `You said: ${message}` });
};
