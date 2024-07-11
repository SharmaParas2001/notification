// NotificationTime.js
import React from 'react';
import moment from 'moment';

const customFromNow = (dateTime) => {
    const diffInDays = moment().diff(dateTime, 'days');
    if (diffInDays === 1) {
        return '1 day ago';
    } else if (diffInDays === 7) {
        return '1 week ago';
    } else if (diffInDays === 14) {
        return '2 weeks ago';
    } else {
        return moment(dateTime).fromNow(true) + ' ago';
    }
};

const NotificationTime = ({ notification }) => {
    return (
        <p className="time custom-time">
            {customFromNow(notification.notificationDateTime)}
        </p>
    );
};

export default NotificationTime;
