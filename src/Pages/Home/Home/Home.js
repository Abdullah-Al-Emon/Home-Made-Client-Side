import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CustomerEating from '../CustomerEating/CustomerEating';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';

const Home = () => {
    useTitle('Home')
    return (
        <div className='w-[95%] mx-auto'>
            <Banner/>
            <Services/>
            <CustomerEating/>
            <Stats/>
            <About/>
        </div>
    );
};

export default Home;