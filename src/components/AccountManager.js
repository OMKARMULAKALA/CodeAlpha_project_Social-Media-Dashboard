import React, { useState } from 'react';
import '../styles/AccountManager.css';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';


const AccountManager = () => {
  const [accounts] = useState([
    { platform: 'Facebook', connected: false, data: null },
    { platform: 'Twitter', connected: false, data: null },
    { platform: 'Instagram', connected: false, data: null },
  ]);

  const handleConnect = async (platform) => {
    switch (platform) {
      case 'Facebook':
        await connectFacebook();
        break;
      case 'Twitter':
        await connectTwitter();
        break;
      case 'Instagram':
        await connectInstagram();
        break;
      default:
        break;
    }
  };

  const connectFacebook = async () => {
    try {
      // Redirect user to Facebook OAuth
      window.location.href = 'https://graph.facebook.com/oauth/authorize';
    } catch (error) {
      console.error('Error connecting to Facebook:', error);
    }
  };

  const connectTwitter = async () => {
    try {
      // Redirect user to Twitter OAuth
      window.location.href = 'https://graph.instagram.com/oauth/authorize';
    } catch (error) {
      console.error('Error connecting to Twitter:', error);
    }
  };

  const connectInstagram = async () => {
    try {
      // Redirect user to Instagram OAuth
      window.location.href = 'https://graph.twitter.com/oauth/authorize';
    } catch (error) {
      console.error('Error connecting to Instagram:', error);
    }
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Facebook':
        return <IoLogoFacebook style={{ color: '#4267B2' }} />;
      case 'Twitter':
        return <IoLogoTwitter style={{ color: '#1DA1F2' }} />;
      case 'Instagram':
        return <IoLogoInstagram style={{ color: '#C13584' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="account-manager">
      <h2>Manage Accounts</h2>
      {accounts.map((account, index) => (
        <div key={index} className="account-item">
          <span className="platform-icon">{getPlatformIcon(account.platform)}</span>
          <span>{account.platform}</span>
          <button onClick={() => handleConnect(account.platform)}>
            {account.connected ? 'Connected' : 'Connect'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AccountManager;
