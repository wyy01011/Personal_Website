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
        top: position.y + window.scrollY + 10, 
        left: position.x + window.scrollX + 10, 
        pointerEvents: 'none'
    };
    

    return (
        <div style={followerStyle}>
            <img src={`${process.env.PUBLIC_URL}/images/heart.png`} alt="Mouse Follower" width="40px" height="40px" />
        </div>
    );
}

export default MouseFollower;
