import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import './ChatInterface.css';

const scenarios = {
  'payment-issue': {
    title: 'Payment Issue',
    messages: [
      { type: 'user', text: 'My payment was declined', timestamp: '9:41 AM' },
      { 
        type: 'bot', 
        text: "It looks like your card was declined. Try these steps:",
        timestamp: '9:41 AM',
        suggestions: [
          'Check that your card details are correct',
          'Contact your bank to make sure there are no restrictions',
          'Try a different payment method'
        ]
      },
      {
        type: 'workflow',
        text: 'Get immediate help - Talk to an agent',
        timestamp: '9:41 AM',
        options: ['Yes, I need help', 'Not really']
      }
    ]
  },
  'flight-delay': {
    title: 'Flight Delay',
    messages: [
      { type: 'user', text: 'What happens if my flight is delayed?', timestamp: '10:15 AM' },
      {
        type: 'bot',
        text: "If your flight is delayed, we will:",
        timestamp: '10:15 AM',
        suggestions: [
          'Notify you of your new departure time via email and SMS',
          'Update your boarding pass with the new time',
          'Provide rebooking options if the delay is significant'
        ]
      },
      {
        type: 'bot',
        text: 'Learn more about our delay policy',
        timestamp: '10:15 AM',
        isLink: true
      }
    ]
  },
  'live-agent': {
    title: 'Live Agent Support',
    messages: [
      { type: 'user', text: 'I need help with my order', timestamp: '2:30 PM' },
      {
        type: 'bot',
        text: "Hi! I can help with your payment issue.",
        timestamp: '2:30 PM'
      },
      {
        type: 'bot',
        text: "Could you please confirm the last 4 digits of your card?",
        timestamp: '2:30 PM'
      },
      { type: 'user', text: "It's 1234", timestamp: '2:31 PM' },
      {
        type: 'agent',
        text: "Hi! I'm Sarah. I can help with your payment issue.",
        agentName: 'Sarah',
        agentRole: 'Support',
        timestamp: '2:31 PM'
      },
      {
        type: 'agent',
        text: "Thanks! I'll check and get back to you in a moment.",
        agentName: 'Sarah',
        agentRole: 'Support',
        timestamp: '2:31 PM'
      }
    ]
  },
  'bug-report': {
    title: 'Bug Report',
    messages: [
      { type: 'user', text: 'Failed to update calendar event', timestamp: '11:00 AM' },
      {
        type: 'bot',
        text: "I see you're having trouble updating your calendar. Can you tell me more about what happened?",
        timestamp: '11:00 AM'
      },
      { type: 'user', text: "I get a tariff examples", timestamp: '11:01 AM' },
      {
        type: 'workflow',
        text: 'Update Failed?',
        description: "I want to update the existing confirmed",
        timestamp: '11:01 AM',
        fields: [
          { label: 'Error Code', value: 'Sandbox' },
          { label: 'App Version', value: '3.5.1' },
          { label: 'Device', value: 'iPhone 13' },
          { label: 'iOS', value: 'iOS 17.6.1' }
        ],
        actions: ['Include tech details', 'Submit']
      }
    ]
  },
  'account-recovery': {
    title: 'Account Recovery',
    messages: [
      { type: 'user', text: 'I forgot my password', timestamp: '3:45 PM' },
      {
        type: 'workflow',
        text: 'Reset Password',
        description: "We have sent you an email with a link to reset your password.",
        timestamp: '3:45 PM',
        actions: ['Open Email App']
      },
      {
        type: 'bot',
        text: "Didn't get the email? Resend Link",
        timestamp: '3:45 PM',
        isLink: true
      }
    ]
  }
};

const ChatInterface = ({ scenario }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(scenarios[scenario]?.messages || []);
  }, [scenario]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        type: 'user',
        text: inputValue,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="chat-header-content">
          <button className="back-btn">←</button>
          <h2>{scenarios[scenario]?.title || 'Support Chat'}</h2>
          <button className="close-btn">×</button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;