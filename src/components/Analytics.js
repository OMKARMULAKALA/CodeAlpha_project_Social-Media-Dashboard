import React from 'react';
import '../styles/Analytics.css';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

const Analytics = () => {
  const dummyData = {
    Facebook: {
      daily: { followers: 1200, posts: 35 },
      weekly: { followers: 8500, posts: 210 },
      monthly: { followers: 36000, posts: 900 },
      yearly: { followers: 432000, posts: 10800 },
      overall: { followers: 500000, posts: 12000 },
    },
    Twitter: {
      daily: { followers: 800, posts: 50 },
      weekly: { followers: 5600, posts: 350 },
      monthly: { followers: 24000, posts: 1500 },
      yearly: { followers: 288000, posts: 18000 },
      overall: { followers: 320000, posts: 20000 },
    },
    Instagram: {
      daily: { followers: 1500, posts: 20 },
      weekly: { followers: 10500, posts: 140 },
      monthly: { followers: 45000, posts: 600 },
      yearly: { followers: 540000, posts: 7200 },
      overall: { followers: 600000, posts: 8000 },
    },
  };

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <div className="main_card">
        {Object.keys(dummyData).map((platform) => (
          <div key={platform} className={`sub_card ${platform.toLowerCase()}`}>
            <div className="report-header">
              <IonIcon icon={
                platform === 'Facebook' ? logoFacebook :
                platform === 'Instagram' ? logoInstagram : logoTwitter
              } style={{ color: platform === 'Facebook' ? '#3b5998' : platform === 'Instagram' ? '#e4405f' : '#1da1f2', fontSize: 'xx-large' }} />
              <p>@username</p>
            </div>
            <div className="report-section">
              <h3>Daily Report</h3>
              <p>Followers: {dummyData[platform].daily.followers}</p>
              <p>Posts: {dummyData[platform].daily.posts}</p>
            </div>
            <div className="report-section">
              <h3>Weekly Report</h3>
              <p>Followers: {dummyData[platform].weekly.followers}</p>
              <p>Posts: {dummyData[platform].weekly.posts}</p>
            </div>
            <div className="report-section">
              <h3>Monthly Report</h3>
              <p>Followers: {dummyData[platform].monthly.followers}</p>
              <p>Posts: {dummyData[platform].monthly.posts}</p>
            </div>
            <div className="report-section">
              <h3>Yearly Report</h3>
              <p>Followers: {dummyData[platform].yearly.followers}</p>
              <p>Posts: {dummyData[platform].yearly.posts}</p>
            </div>
            <div className="report-section">
              <h3>Overall Report</h3>
              <p>Followers: {dummyData[platform].overall.followers}</p>
              <p>Posts: {dummyData[platform].overall.posts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
