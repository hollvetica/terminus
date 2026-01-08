import React from 'react';
import './ScenarioSelector.css';

const scenarios = [
  { id: 'payment-issue', label: 'Payment Issue', icon: '💳' },
  { id: 'flight-delay', label: 'Flight Delay', icon: '✈️' },
  { id: 'live-agent', label: 'Live Agent', icon: '👤' },
  { id: 'bug-report', label: 'Bug Report', icon: '🐛' },
  { id: 'account-recovery', label: 'Account Recovery', icon: '🔐' }
];

const ScenarioSelector = ({ selectedScenario, onScenarioChange }) => {
  return (
    <div className="scenario-selector">
      <label>Demo Scenario:</label>
      <div className="scenario-buttons">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            className={`scenario-btn ${selectedScenario === scenario.id ? 'active' : ''}`}
            onClick={() => onScenarioChange(scenario.id)}
          >
            <span className="scenario-icon">{scenario.icon}</span>
            <span className="scenario-label">{scenario.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioSelector;