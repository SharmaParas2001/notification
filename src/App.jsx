import React, { useState } from 'react';
import Header from './Header';
import NotificationList from './NotificationList';
import DATA from './DATA';
import './style/notificationsContainer.scss';


function App() {
  const [notifications, setNotifications] = useState(DATA);

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }
  
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="App">
      <div className="container">
        <Header unreadCount={unreadCount} markAllAsRead={markAllAsRead} />
        <NotificationList notifications={notifications} />
      </div>
    </div>
  );
}

export default App;