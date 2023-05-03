import React, { createContext } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

export const ChefContext = createContext([]);

const Main = () => {
    const { chefById } = useLoaderData();
    return (
        <ChefContext.Provider value={chefById}>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className=''>
                    <Outlet />
                </div>
                <div className="flex-grow" />
                <Footer />
            </div>
        </ChefContext.Provider>
    );
};

export default Main;