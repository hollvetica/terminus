import React from 'react';
import './Message.css';

const Message = ({ type, text, timestamp, suggestions, options, agentName, agentRole, isLink, description, fields, actions }) => {
  if (type === 'user') {
    return (
      <div className="message user-message">
        <div className="message-bubble user-bubble">
          <p>{text}</p>
        </div>
        <span className="message-time">{timestamp}</span>
      </div>
    );
  }

  if (type === 'bot') {
    return (
      <div className="message bot-message">
        <div className="message-bubble bot-bubble">
          <p>{text}</p>
          {suggestions && (
            <ol className="suggestion-list">
              {suggestions.map((suggestion, idx) => (
                <li key={idx}>{suggestion}</li>
              ))}
            </ol>
          )}
          {isLink && (
            <button className="link-btn">Learn more →</button>
          )}
        </div>
        <span className="message-time">{timestamp}</span>
      </div>
    );
  }

  if (type === 'workflow') {
    return (
      <div className="message bot-message">
        <div className="message-bubble workflow-bubble">
          <h4>{text}</h4>
          {description && <p className="workflow-description">{description}</p>}
          
          {fields && (
            <div className="workflow-fields">
              {fields.map((field, idx) => (
                <div key={idx} className="workflow-field">
                  <span className="field-label">{field.label}:</span>
                  <span className="field-value">{field.value}</span>
                </div>
              ))}
            </div>
          )}
          
          {options && (
            <div className="workflow-options">
              {options.map((option, idx) => (
                <button key={idx} className="workflow-option-btn">
                  {option}
                </button>
              ))}
            </div>
          )}
          
          {actions && (
            <div className="workflow-actions">
              {actions.map((action, idx) => (
                <button key={idx} className="workflow-action-btn">
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="message-time">{timestamp}</span>
      </div>
    );
  }

  if (type === 'agent') {
    return (
      <div className="message agent-message">
        <div className="agent-header">
          <div className="agent-avatar">
            {agentName?.charAt(0) || 'A'}
          </div>
          <div className="agent-info">
            <span className="agent-name">{agentName}</span>
            <span className="agent-role">{agentRole}</span>
          </div>
        </div>
        <div className="message-bubble agent-bubble">
          <p>{text}</p>
        </div>
        <span className="message-time">{timestamp}</span>
      </div>
    );
  }

  return null;
};

export default Message;