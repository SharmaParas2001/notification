import React from 'react';

const NotificationHeader = ({ notification }) => {
  return (
    <div>
      <div>
        <a href="#">{notification.name}</a>
        {renderNotificationType(notification)}
        {!notification.read && <span className="unread"></span>}
      </div>
    </div>
  );
};

const renderNotificationType = (notification) => {
  switch (notification.notificationType) {
    case 'react':
      return (
        <>
          {" reacts on recent post "}
          <a className="link" href={notification.postUrl} style={{ cursor: "pointer" }}>
            {"  " + notification.postTitle}
          </a>
        </>
      );
    case 'follow':
      return " started following you.";
    case 'group-join':
      return (
        <>
          {" joined the group "}
          <a className="link" href={notification.postUrl} style={{ cursor: "pointer" }}>
            {notification.groupName}
          </a>
        </>
      );
      case 'group-left':
      return (
        <>
          {" left the group "}
          <a className="link" href={notification.postUrl} style={{ cursor: "pointer" }}>
            {notification.groupName}
          </a>
        </>
      );
    case 'message':
      return " Sent you a private message.";
    case 'comment':
      return " commented on your post.";

    default:
      return null;
  }
};

export default NotificationHeader;
