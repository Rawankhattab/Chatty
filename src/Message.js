
const Message = ({ text, author, timestamp }) => {
    return (
      <div className="message">
        <strong>👤 {author}:</strong> {text} <span>{timestamp}</span>
      </div>
    );
  };
  
  export default Message;