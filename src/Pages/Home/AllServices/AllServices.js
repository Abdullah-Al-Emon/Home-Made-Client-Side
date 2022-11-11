import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () =>
{
    useTitle('Services')
    const [allServices, setAllServices] = useState([])
    
    useEffect(() =>
    {
        fetch(`https://home-made-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    allServices.map(allService => <AllServicesCard
                        key={allService._id}
                        allService={allService}
                    ></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;