import React, { useEffect, useState } from 'react';
import ServicesReviewRow from './ServicesReviewRow';

const ServicesDetailsRow = () =>
{
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
    {
        fetch(`https://home-made-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
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
    // console.log(reviews)
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mx-auto my-3 w-full">
            <table className="table w-full">
                <tbody>
                    {
                        reviews.map(review => <ServicesReviewRow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ServicesReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServicesDetailsRow;