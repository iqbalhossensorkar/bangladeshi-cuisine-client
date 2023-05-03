import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className=''>
            <Outlet />
            </div>
            <div className="flex-grow" />
            <Footer />
        </div>
    );
};

export default Main;