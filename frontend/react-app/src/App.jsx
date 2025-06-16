import React, { useState, useEffect } from 'react';
import ChatList from './components/ChatList';
import ChatForm from './components/ChatForm';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [backend, setBackend] = useState('node'); // or 'flask'

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:${backend === 'node' ? '3000' : '5000'}/api/chat`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [backend]);

  const handleSendMessage = async (message, sender) => {
    try {
      await axios.post(`http://localhost:${backend === 'node' ? '3000' : '5000'}/api/chat`, {
        message,
        sender
      });
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App">
      <div className="backend-selector">
        <button 
          onClick={() => setBackend('node')}
          className={backend === 'node' ? 'active' : ''}
        >
          Node.js Backend
        </button>
        <button 
          onClick={() => setBackend('flask')}
          className={backend === 'flask' ? 'active' : ''}
        >
          Flask Backend
        </button>
      </div>
      <ChatList messages={messages} />
      <ChatForm onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App; 