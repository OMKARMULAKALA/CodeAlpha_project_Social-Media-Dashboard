import React, { useState } from 'react';
import '../styles/PostScheduler.css';

const PostScheduler = () => {
  const [postContent, setPostContent] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSchedulePost = () => {
    console.log('Scheduling Post:', postContent, scheduledTime);
  };

  return (
    <div className="post-scheduler">
      <h2>Schedule a Post</h2>
      <textarea
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <input
        type="datetime-local"
        value={scheduledTime}
        onChange={(e) => setScheduledTime(e.target.value)}
      />
      <button onClick={handleSchedulePost}>Schedule Post</button>
    </div>
  );
};

export default PostScheduler;
