import React, { useEffect, useRef } from 'react';
import Message from './Message';

const ChatWindow = ({ messages, isTyping, username, handleLogout }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Welcome, {username} 👤</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} author={msg.author} timestamp={msg.timestamp} />
        ))}
        {isTyping && <p className="user-typing">A user is typing...</p>}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
