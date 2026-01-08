import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import ContextPanel from '../components/ContextPanel';
import ScenarioSelector from '../components/ScenarioSelector';
import './ChatDemo.css';

const ChatDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState('payment-issue');
  const [showContext, setShowContext] = useState(true);

  return (
    <div className="chat-demo">
      <div className="demo-header">
        <h1>Terminus SDK Demo</h1>
        <p>In-App Contextual Support</p>
      </div>

      <div className="demo-controls">
        <ScenarioSelector 
          selectedScenario={selectedScenario}
          onScenarioChange={setSelectedScenario}
        />
        <button 
          className="toggle-context-btn"
          onClick={() => setShowContext(!showContext)}
        >
          {showContext ? 'Hide' : 'Show'} Context
        </button>
      </div>

      <div className="demo-content">
        {showContext && (
          <ContextPanel scenario={selectedScenario} />
        )}
        <ChatInterface scenario={selectedScenario} />
      </div>
    </div>
  );
};

export default ChatDemo;