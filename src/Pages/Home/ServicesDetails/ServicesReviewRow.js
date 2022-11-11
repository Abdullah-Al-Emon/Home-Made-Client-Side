import React from 'react';

const ServicesReviewRow = ({review}) =>
{
    const {customer, customer_photo, price, serviceName, service, _id, ratting} = review;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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