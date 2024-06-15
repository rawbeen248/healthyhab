import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setMessages([{ text: 'Hello, how are you feeling today?', type: 'received' }]);
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'sent' }]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Message received', type: 'received' },
        ]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
