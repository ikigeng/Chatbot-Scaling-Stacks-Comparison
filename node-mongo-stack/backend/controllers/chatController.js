const Chat = require('../models/Chat');

// Get all messages
exports.getMessages = async (req, res) => {
    try {
        const messages = await Chat.find().sort({ timestamp: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new message
exports.createMessage = async (req, res) => {
    const chat = new Chat({
        message: req.body.message,
        sender: req.body.sender
    });

    try {
        const newMessage = await chat.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; 