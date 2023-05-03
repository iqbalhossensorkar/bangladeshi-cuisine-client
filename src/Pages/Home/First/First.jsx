import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import DemoComponent from '../../Components/Flicking/DemoComponent';
import Chefs from '../Chefs/Chefs';

const First = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Chefs></Chefs>
            <DemoComponent></DemoComponent>
        </div>
    );
};

export default First;