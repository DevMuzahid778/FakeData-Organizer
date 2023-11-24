import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Home.css'

const Home = () => {
    const usersData = useLoaderData()
    return (
        <div className='users'>
            {
                usersData.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Home;