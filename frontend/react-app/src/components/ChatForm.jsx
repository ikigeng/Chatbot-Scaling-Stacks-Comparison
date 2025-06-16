import React, { useState } from 'react';

function ChatForm({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && sender.trim()) {
      onSendMessage(message, sender);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Your name"
        required
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatForm; 