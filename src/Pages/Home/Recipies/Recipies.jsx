import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { useLoaderData, useParams } from 'react-router-dom';
import animated from '../../../assets/animated/19705-chef.json'
import Lottie from "lottie-react";
import { FaHeart } from 'react-icons/fa';

const Recipies = () => {
    // const getChef = useLoaderData();
    const chefById = useLoaderData();
    console.log(chefById);
    const { id, img, name, description, like, experience, recipes } = chefById;
    return (
        <div className='container mx-auto mb-20'>
            <div className="p-4 bg-gray-200 mb-20">
                <div className='flex items-center justify-center relative top-20'>
                    <img src={img} alt="" className='object-contain' />
                </div>
                <div className='text-center'>
                    <h2 className='badge lg:text-3xl font-semibold p-5 rounded-none relative top-14'>{name}</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 items-center justify-between p-4'>
                <div>
                    <p className='text-2xl text-gray-400 font-bold'>About</p>
                    <h2 className='text-5xl text-error font-bold'>{name}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <Lottie animationData={animated} loop={true} className='' />
                </div>
            </div>
            <div>
            <h1 className='text-center text-4xl font-semibold mb-6'>My Achievements</h1>
            <p className='text-gray-400 text-center mb-20'>This is my career || Cooking is my passion || My dreams always </p>
                <div className='flex justify-evenly items-center'>
                    <div className='flex flex-col justify-center items-center px-8 py-4 border-2 border-error rounded-lg'>
                        <FaHeart className='text-error text-4xl'></FaHeart>
                        <span className='text-xl font-bold text-gray-400'> {like}</span>
                    </div>
                    <div className='flex flex-col justify-center items-center px-8 py-4 border-2 border-error rounded-lg'>
                        <p className='text-error text-4xl font-bold'>{experience}<span className='text-base text-black'>y</span></p>
                        <p className='text-xl font-bold text-gray-400 text-center'>Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipies;

