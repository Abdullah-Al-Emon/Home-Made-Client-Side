import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const detailsServices = useLoaderData()
    console.log(detailsServices)
    return (
        <div>
            
        </div>
    );
};

export default ServicesDetails;