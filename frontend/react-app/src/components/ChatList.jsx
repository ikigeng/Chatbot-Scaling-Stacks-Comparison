import React from 'react';

function ChatList({ messages }) {
  return (
    <div className="chat-list">
      {messages.map((message) => (
        <div key={message.id || message._id} className="message">
          <div className="message-header">
            <span className="sender">{message.sender}</span>
            <span className="timestamp">
              {new Date(message.timestamp).toLocaleString()}
            </span>
          </div>
          <div className="message-content">{message.message}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatList; 