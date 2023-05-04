import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import DemoComponent from '../../Components/Flicking/DemoComponent';
import Chefs from '../Chefs/Chefs';
import CardSection from '../../Components/CardSection/CardSection';
import CoverSection from '../../Components/Cover/CoverSection';

const First = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Chefs></Chefs>
            <DemoComponent></DemoComponent>
            <CardSection></CardSection>
            <CoverSection></CoverSection>
        </div>
    );
};

export default First;