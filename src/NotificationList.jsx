// NotificationList.js
import React from 'react';
import Notification from './Notification';

const NotificationList = ({ notifications }) => {
  return (
    <div className="wrapper">
      {notifications.map((notification, index) => (
        <Notification key={index} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
