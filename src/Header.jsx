// Header.js
import React from 'react';

const Header = ({ unreadCount, markAllAsRead }) => {
  return (
    <header>
      <div className="title">
        <h1>Notifications</h1>
        { unreadCount > 0  && <span className="badge">
          {unreadCount}
        </span>}
      </div>
      {unreadCount > 0 && <button id="mark" onClick={markAllAsRead}>
        Mark all as read
      </button>}
      {!unreadCount > 0 && <p id="mark" >
        All are read
      </p>}
    </header>
  );
};

export default Header;
