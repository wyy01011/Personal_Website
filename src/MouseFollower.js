import React, { useState, useEffect } from 'react';

function MouseFollower() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Style for the follower element
    const followerStyle = {
        position: 'absolute',
        top: position.y + 10, // No offset
        left: position.x + 10, // No offset
        pointerEvents: 'none',
    };
    

    return (
        <div style={followerStyle}>
            <img src="/images/heart.png" alt="Mouse Follower" width="40px" height="40px" />
        </div>
    );
}

export default MouseFollower;
