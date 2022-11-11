import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ServicesReviewRow = ({review, handleDelete}) =>
{
    const {customer, customer_photo, price, serviceName, service, _id, ratting} = review;
    return (
        <tr>
            <th>
            <button onClick={() => handleDelete(_id)} className='text-xl text-white p-3 rounded-full hover:bg-gray-800 bg-gray-500'>
                   <AiFillDelete></AiFillDelete>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-8 h-12">
                            <img src={customer_photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Price: {price}$</span>
            </td>
            <td>Ratting: {ratting}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ServicesReviewRow;