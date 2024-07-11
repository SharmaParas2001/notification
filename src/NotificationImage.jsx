// NotificationImage.js
import React from 'react';

const NotificationImage = ({ notification }) => {
  return (
    <>
      {notification.picture && <img src={notification.picture} alt={notification.name} />}
    </>
  );
};

export default NotificationImage;
