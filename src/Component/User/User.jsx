import React from 'react';
import './User.css'

const User = (prop) => {
    const {id, username, name} = prop.user
    return (
        <div className='User'>
            <p><span>id:</span> {id}</p>
            <p><span>name:</span> {name}</p>
            <p><span>Username:</span> {username}</p>
            <button className='Button'>Get Details</button>
        </div>
    );
};

export default User;