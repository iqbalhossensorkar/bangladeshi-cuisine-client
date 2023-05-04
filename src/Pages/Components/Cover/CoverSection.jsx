import React from 'react';
import coverThumb from '../../../assets/cover-thumb/coverThumb.jpg'

const CoverSection = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${coverThumb})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-lg font-bold">MESSAGE FROM FOUNDER</h1>
                        <h1 className="mb-5 text-5xl font-bold">First, we eat. Then, we do everything else.</h1>
                        <p className="mb-5">Melt the butter in a small saucepan until sizzling. Watch it carefully – the butter will foam, and, when the foam subsides, it will turn from yellow to a hazelnut brown. At this point, remove from the heat, tip into a bowl and leave to cool. Meanwhile, mix the flours, salt, baking powder and bicarb together in a bowl and set aside.</p>
                        <p className="mb-5">When the butter is cool, tip in the sugars and beat with a wooden spoon to combine. Add the egg, yolks and vanilla and beat together. Scrape the wet mixture into the dry ingredients and stir until it all comes together into a dough. Fold in the chocolate, then chill for at least 3 hrs, or until firm. Will keep chilled for up to 24 hrs.</p>
                        <i>Talk Less Eat More</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverSection;