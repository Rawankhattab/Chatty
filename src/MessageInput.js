import React, { useState } from "react";

const MessageInput = ({ addMessage ,onTyping }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      addMessage({ text: input, author: "You" });
      setInput("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => {setInput(e.target.value)
        onTyping();
      }}
        placeholder="Type a message..."
        
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;