import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) =>
{
    const { title, price, ratting, img, description, _id } = service;
    return (
        <div data-aos="zoom-in-up" className="card w-[300px] md:w-[350px] mx-auto h-[550px] bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100) + '...'}
                </p>
                <p className='text-[15px] font-bold'>Price: {price}$</p>
                <p className='text-[15px] font-bold'>Rating: {ratting}</p>
                <div className="card-actions justify-end">
                    <Link to={`services/${_id}`} className="btn bg-gray-600 hover:bg-gray-900">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;