import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch messages. Please try again later.');
      setLoading(false);
      console.error('Error fetching messages:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/messages/${id}`);
      setMessages(messages.filter(message => message._id !== id));
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Failed to delete message. Please try again.');
    }
  };

  if (loading) {
    return <div className="messages-loading">Loading messages...</div>;
  }

  if (error) {
    return <div className="messages-error">{error}</div>;
  }

  if (messages.length === 0) {
    return <div className="no-messages">No messages found.</div>;
  }

  return (
    <div className="messages-container">
      <h1 className="messages-title">Contact Messages</h1>
      <div className="messages-grid">
        {messages.map((message) => (
          <div key={message._id} className="message-card">
            <div className="message-header">
              <h3>{message.subject}</h3>
              <button
                className="delete-button"
                onClick={() => handleDelete(message._id)}
                aria-label="Delete message"
              >
                ×
              </button>
            </div>
            <div className="message-info">
              <p><strong>From:</strong> {message.name}</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${message.email}`}>{message.email}</a>
              </p>
              <p>
                <strong>Date:</strong>{' '}
                {new Date(message.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="message-content">
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages; 