import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CustomerEating from '../CustomerEating/CustomerEating';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div className='w-[95%] mx-auto'>
            <Banner/>
            <Services/>
            <CustomerEating/>
            <About/>
        </div>
    );
};

export default Home;