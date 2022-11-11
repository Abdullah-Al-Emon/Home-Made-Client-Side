import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

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

    const handleDelete = id =>
    {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:4000/reviews/${id}`, {
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
                        reviews.map(review => <MyReviewsRow
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        ></MyReviewsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;