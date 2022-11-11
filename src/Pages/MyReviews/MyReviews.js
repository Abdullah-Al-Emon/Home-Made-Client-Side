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
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mx-auto my-3 w-[95%]">
            <table className="table w-full">
                <tbody>
                    {
                        reviews.map(review => <MyReviewsRow
                        key={review._id}
                        review={review}
                        ></MyReviewsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;