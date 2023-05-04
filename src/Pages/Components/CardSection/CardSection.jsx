import React from 'react';
import cardThumb from '../../../assets/card-section/couple.jpg'

const CardSection = () => {
    return (
        <div className='container mx-auto px-10 my-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={cardThumb} alt="Album" className='lg:w-full lg:h-[450px] object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-5xl font-bold">Let's start sharing your awesome recipes</h2>
                    <p>We are excited to launch our new Let’s Cook Together mission at BBC Good Food. We aim to build a community of passionate cooks, where people can find inspiration through.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;