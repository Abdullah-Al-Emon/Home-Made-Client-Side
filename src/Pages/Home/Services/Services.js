import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () =>
{
    const [services, setServices] = useState([])
    const [size, setSize] = useState(0);

    useEffect(() =>
    {
        fetch(`http://localhost:4000/services?size=${size}`)
            .then(res => res.json())
            .then(data => {setServices(data)
                setSize(3)
            })
    }, [services, size])

    return (
        <div>
            <div className='text-center mb-4'>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Services
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        Home Made Food Services
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        It is Our Home Made Food And I deliver with the delivery boy <br /> I make delicious food at home and sell it.
                    </p>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mb-5'><Link to='/service' className="btn bg-gray-600 normal-case text-base hover:bg-gray-900">See all Services</Link></div>
        </div>
    );
};

export default Services;