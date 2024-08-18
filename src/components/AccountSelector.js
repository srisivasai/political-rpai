import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSelector.css';

const AccountSelector = () => {
  const [account, setAccount] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    // Add your authentication logic here if needed
    alert(`Continuing with account: ${account}`);
    navigate('/dashboard');
  };

  const handleUseDifferentAccount = () => {
    // Add your use different account logic here
    alert("Using a different account...");
  };

  return (
    <div className="account-selector">
      <div className="logo-container">
        <img src="" alt="RPAI logo" className="logo" />
      </div>
      <div className="header">
        <div className="header-content">
          <span className="title">RPAI</span>
        </div>
      </div>
      <div className="content">
        <h2>Your RPAI Account</h2>
        <p>Choose an account to continue.</p>
        <div className="input-group">
          <input
            type="text"
            className="account-input"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder="Enter account details"
          />
          <button className="embedded-button" onClick={handleContinue}>Continue ></button>
        </div>
        <button className="different-button" onClick={handleUseDifferentAccount}>Use A Different Account ></button>
      </div>
    </div>
  );
};

export default AccountSelector;
