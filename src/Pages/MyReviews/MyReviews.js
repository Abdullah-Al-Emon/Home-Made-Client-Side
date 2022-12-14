import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () =>
{
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
    {
        fetch(`https://home-made-server.vercel.app/reviews?email=${user?.email}`)
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

    const handleDelete = id =>
    {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://home-made-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data =>
                {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mx-auto my-3 w-[95%]">
            <table className="table w-full">
                <tbody>
                    {
                        reviews.map(revw => <MyReviewsRow
                        key={revw._id}
                        revw={revw}
                        handleDelete={handleDelete}
                        ></MyReviewsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;