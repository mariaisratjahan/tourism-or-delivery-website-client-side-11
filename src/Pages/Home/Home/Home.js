import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TopDestination from '../TopDestinations/TopDestination';
import Travellers from '../Travellers/Travellers';

const Home = () => {
    return (
        <div id="home">      
            <Banner></Banner>
            <Services></Services>
            <Travellers></Travellers>
            <TopDestination></TopDestination>
        </div>
    );
};

export default Home;