import React, { useEffect, useState } from 'react';
import CardChef from './CardChef';

const Chefs = () => {
    const [Chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='my-28'>
            <h2 className='text-4xl font-semibold text-center mt-10 mb-6'>Best Chefs All Time</h2>
            <p className='text-gray-400 text-center mb-16'>Find The Best Chefs Recipes</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 pl-2 pr-2'>
                {
                    Chef.map(singleChef =>
                        <CardChef key={singleChef.id} singleChef={singleChef}></CardChef>
                    )
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-warning mt-8'>See All</button>
            </div>
        </div>
    );
};

export default Chefs;

