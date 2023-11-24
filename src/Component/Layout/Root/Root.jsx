import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import './Root.css'
import Header from '../../Header/Header';

const Root = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <p className=''>{navigation.state == "loading" ? "Loading..." : ""}</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;