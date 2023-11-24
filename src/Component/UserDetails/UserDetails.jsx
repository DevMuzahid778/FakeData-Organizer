import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './UseDetails.css'

const UserDetails = () => {
    const Details = useLoaderData()
    const navigate = useNavigate();
    const GoBack = () =>{
        navigate(-1)
    }
    return (
        <div className='UseDetails'>
            <p>Name: {Details.name}</p>
            <p>Email: {Details.email}</p>
            <p>Phone: {Details.phone}</p>
            <p>Website: <a href={Details.website}>Visit Me</a></p>
            <button className='Button' onClick={GoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;