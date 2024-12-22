import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTyping, setIsTyping] = useState(false);


  const handleTyping = () => setIsTyping(true);

  const handleLogout = () => {
    setUsername('');
    setMessages([]);
    setIsLoggedIn(false);
  };
  const autoReplies = {
    "hi": "Hello!",
    "how are you": "Good, how are you too?",
    "bye": "Goodbye! Have a nice day!",
  };

  const addMessage = (newMessage) => {
    const timestamp = new Date().toLocaleTimeString();
    setMessages([...messages, { ...newMessage, timestamp }]);


    const userMessage = newMessage.text.toLowerCase(); 
    const otherUserReply = autoReplies[userMessage] || "Sorry, I didn't understand that.";

    setTimeout(() => {
      const otherUserMessage = {
        text: otherUserReply,
        author: "User 2",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, otherUserMessage]);
    }, 1500); 
  };

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Chatty</h1>
      </header>

      
      {!isLoggedIn ? (
        <div className="login-page">
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Your Name..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button onClick={() => handleLogin(username)} disabled={!username.trim()}>
            Join Chat
          </button>
        </div>
      ) : (
        <>
          <ChatWindow  messages={messages}
  isTyping={isTyping}
  username={username}
  handleLogout={handleLogout} />
          <MessageInput addMessage={(msg) => addMessage({ ...msg, author: username })} onTyping={handleTyping} />
        </>
      )}
    </div>
  );
}

export default App;