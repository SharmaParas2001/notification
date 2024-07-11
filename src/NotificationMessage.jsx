// NotificationMessage.js
import React from 'react';

const NotificationMessage = ({ notification }) => {
  return (
    <>
      {notification.message && (
        <p className="privateMessage">{notification.message}</p>
      )}
    </>
  );
};

export default NotificationMessage;
