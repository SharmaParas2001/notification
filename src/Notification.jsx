// Notification.js
import React from 'react';
import NotificationHeader from './NotificationHeader';
import NotificationTime from './NotificationTime';
import NotificationMessage from './NotificationMessage';
import NotificationImage from './NotificationImage';

const Notification = ({ notification }) => {
  return (
    <div className="notification" data-unread={!notification.read}>
      <div className="notification-content">
        <img src={notification.avatar} alt={notification.name} className="avatar" />
        <div className="post">
          <div>
            <NotificationHeader notification={notification} />
            <NotificationTime notification={notification} />
          </div>
          <NotificationMessage notification={notification} />
        </div>
      </div>
      <NotificationImage notification={notification} />
    </div>
  );
};

export default Notification;
