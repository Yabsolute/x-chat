import React, { useState } from 'react';
import axios from 'axios';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Hello!' },
  ]);
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('api/api/chatgpt', { messages });
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h1>ChatGPT Integration</h1>
      <textarea
        value={messages[messages.length - 1].content}
        onChange={(e) =>
          setMessages([{ role: 'user', content: e.target.value }])
        }
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatApp;