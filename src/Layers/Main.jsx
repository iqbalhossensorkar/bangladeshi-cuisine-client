import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-screen'>
                <Outlet></Outlet>
            </div>
            <div className='h'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;