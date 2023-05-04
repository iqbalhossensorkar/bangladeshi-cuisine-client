import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaHeartBroken, FaLongArrowAltLeft } from 'react-icons/fa';
import errorPhoto from '../../assets/404/404.jpg'

const Error = () => {
    const error = useRouteError();
    const { data, status, statusText } = error;

    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src={errorPhoto} alt="" className='h-64 w-64 object-cover'/>
                    <h1 className='text-error font-bold'>{data}</h1>
                    <Link to='/'><button className="btn btn-outline mt-10">
                        <FaLongArrowAltLeft className="h-5 w-5" />
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;