import React from 'react';
import PostScheduler from '../components/PostScheduler';
import AccountManager from '../components/AccountManager';
import Analytics from '../components/Analytics';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>
      <PostScheduler />
      <AccountManager />
      <Analytics />
    </div>
  );
};

export default Dashboard;
