import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyReviews = () =>
{
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
    {
        fetch(`http://localhost:4000/reviews?email=${user?.email}`)
            .then(res =>
            {
                if (res.status === 401 || res.status === 403) {
                    // localStorage.removeItem('genius-token')
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])
    console.log(reviews)
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mx-auto my-3 w-[95%]">
            <table className="table w-full">

                <tbody>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;