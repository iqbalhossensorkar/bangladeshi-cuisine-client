import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardChef = ({ singleChef }) => {
    const { img, id, name, experience, recipes, like } = singleChef;
    return (
        <div className='container mx-auto mb-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div>
                    <figure><img src={img} alt="Chef Image" className='h-72 w-full' /></figure>
                    <span className="badge rounded-none p-5 border border-white text-white text-xl badge-error absolute top-[265px] right-3">Recipes: {recipes}</span>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-400'>Year of Experience: {experience}</p>
                    <div className="card-actions justify-end flex items-center">
                        <div className='flex-1'>
                            <p className='flex justify-start items-center'><FaHeart className='mr-2 text-error'></FaHeart><span> {like}</span></p>
                        </div>
                        <Link to={`chef/${singleChef.id}`} className='btn btn-outline btn-error'>View Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardChef;