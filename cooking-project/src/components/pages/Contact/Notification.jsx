import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = ({ status = 'error', message = 'hello' }) => {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        setShowNotification(true);

        const timer = setTimeout(() => {
            setShowNotification(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []); 

    return (
        <div
            className={`notification ${showNotification ? 'show' : ''} ${status}`}
        >
            <p>{message}</p>
        </div>
    );
};

export default Notification;