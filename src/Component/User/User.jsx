import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = (prop) => {
    const {id, username, name} = prop.user
    return (
        <div className='User'>
            <p><span>id:</span> {id}</p>
            <p><span>name:</span> {name}</p>
            <p><span>Username:</span> {username}</p>
            <Link to={`users/${id}`}>
                <button className='Button'>Get Details</button>
            </Link>
        </div>
    );
};

export default User;