import React from 'react';
import './ContextPanel.css';

const contextData = {
  'payment-issue': {
    screen: 'Order Summary',
    action: 'Payment Attempted',
    appVersion: '2.4.1',
    device: 'iPhone 13 Pro',
    os: 'iOS 17.6.1',
    userPlan: 'Premium',
    lastUpdate: '2 mins ago',
    additionalContext: {
      'Order ID': '#ORD-4821',
      'Payment Method': 'Visa •••• 1234',
      'Amount': '$79.99',
      'Error Code': 'CARD_DECLINED'
    }
  },
  'flight-delay': {
    screen: 'Your Trip',
    action: 'Flight Details Viewed',
    appVersion: '3.1.0',
    device: 'iPhone 13',
    os: 'iOS 17.6.1',
    userPlan: 'Standard',
    lastUpdate: '5 mins ago',
    additionalContext: {
      'Flight': 'JFK → SFO',
      'Flight Number': 'AA 465',
      'Date': 'Apr 25',
      'Status': 'Delayed: New dep time 6:30 PM'
    }
  },
  'live-agent': {
    screen: 'Profile & Account',
    action: 'Support Requested',
    appVersion: '2.4.1',
    device: 'iPhone 12',
    os: 'iOS 16.5',
    userPlan: 'Premium',
    lastUpdate: 'Just now',
    additionalContext: {
      'User Email': 'emma.jones@email.com',
      'Account Created': 'Jan 2023',
      'Booking History': '12 trips',
      'Last Order': '#ORD-4821'
    }
  },
  'bug-report': {
    screen: 'Schedule',
    action: 'Update Failed',
    appVersion: '3.5.1',
    device: 'iPhone 13',
    os: 'iOS 17.6.1',
    userPlan: 'Premium',
    lastUpdate: 'Just now',
    additionalContext: {
      'Error Code': 'Sandbox',
      'Feature': 'Calendar Event Update',
      'Network': 'WiFi - Strong',
      'Memory Usage': '342 MB'
    }
  },
  'account-recovery': {
    screen: 'Profile & Account',
    action: 'Password Reset Requested',
    appVersion: '2.4.1',
    device: 'iPhone 12 Pro',
    os: 'iOS 17.0',
    userPlan: 'Standard',
    lastUpdate: 'Just now',
    additionalContext: {
      'Email': 'emma.jones@email.com',
      'Last Login': '3 days ago',
      'Reset Method': 'Email link',
      'Security Level': 'Standard'
    }
  }
};

const ContextPanel = ({ scenario }) => {
  const context = contextData[scenario] || contextData['payment-issue'];

  return (
    <div className="context-panel">
      <div className="context-header">
        <h3>📱 Captured Context</h3>
        <span className="context-status">Auto-captured</span>
      </div>

      <div className="context-section">
        <h4>App State</h4>
        <div className="context-item">
          <span className="context-label">Screen:</span>
          <span className="context-value">{context.screen}</span>
        </div>
        <div className="context-item">
          <span className="context-label">Action:</span>
          <span className="context-value">{context.action}</span>
        </div>
        <div className="context-item">
          <span className="context-label">Last Update:</span>
          <span className="context-value">{context.lastUpdate}</span>
        </div>
      </div>

      <div className="context-section">
        <h4>Environment</h4>
        <div className="context-item">
          <span className="context-label">App Version:</span>
          <span className="context-value">{context.appVersion}</span>
        </div>
        <div className="context-item">
          <span className="context-label">Device:</span>
          <span className="context-value">{context.device}</span>
        </div>
        <div className="context-item">
          <span className="context-label">OS:</span>
          <span className="context-value">{context.os}</span>
        </div>
      </div>

      <div className="context-section">
        <h4>User Info</h4>
        <div className="context-item">
          <span className="context-label">Plan:</span>
          <span className="context-value">{context.userPlan}</span>
        </div>
      </div>

      {context.additionalContext && (
        <div className="context-section">
          <h4>Additional Context</h4>
          {Object.entries(context.additionalContext).map(([key, value]) => (
            <div key={key} className="context-item">
              <span className="context-label">{key}:</span>
              <span className="context-value">{value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="context-footer">
        <small>All context is captured automatically and securely transmitted to support agents when escalated.</small>
      </div>
    </div>
  );
};

export default ContextPanel;