import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UseDetails.css'

const UserDetails = () => {
    const Details = useLoaderData()
    return (
        <div className='UseDetails'>
            <p>Name: {Details.name}</p>
            <p>Email: {Details.email}</p>
            <p>Phone: {Details.phone}</p>
            <p>Website: <a href={Details.website}>Visit Me</a></p>
        </div>
    );
};

export default UserDetails;