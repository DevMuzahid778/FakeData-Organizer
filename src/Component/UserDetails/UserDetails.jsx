import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './UseDetails.css'

const UserDetails = () => {
    const Details = useLoaderData()
    const navigate = useNavigate();
    const GoBack = () =>{
        navigate(-1)
    }
    const GotoURl = () =>{
        window.location.href = `https://www.${Details.website}`;
    }
    return (
        <div className='UseDetails'>
            <p>Name: {Details.name}</p>
            <p>Email: {Details.email}</p>
            <p>Phone: {Details.phone}</p>
            <p>Website: <a className='WebUrl' onClick={GotoURl}>{Details.website}</a></p>
            <button className='Button' onClick={GoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;