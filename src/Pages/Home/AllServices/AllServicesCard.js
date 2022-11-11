import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesCard = ({allService}) => {
    // console.log(allService)
    const { title, price, ratting, img, description, _id } = allService;
    return (
        <div className="card w-[300px] md:w-[350px] mx-auto h-[550px] bg-base-100 shadow-xl">
            <figure><img src={img} className='h-64 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100) + '...'}
                </p>
                <p className='text-[15px] font-bold'>Price: {price}$</p>
                <p className='text-[15px] font-bold'>Rating: {ratting}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className="btn bg-gray-600 hover:bg-gray-900">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;