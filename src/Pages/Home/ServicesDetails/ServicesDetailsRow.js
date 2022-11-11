import React, { useEffect, useState } from 'react';
import ServicesReviewRow from './ServicesReviewRow';

const ServicesDetailsRow = () =>
{
    const [reviews, setReviews] = useState([]);

    useEffect(() =>
    {
        fetch(`http://localhost:4000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    
    // console.log(reviews)
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mx-auto my-3 w-full">
            <table className="table w-full">
                <tbody>
                    {
                        reviews.map(review => <ServicesReviewRow
                            key={review._id}
                            review={review}
                        ></ServicesReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServicesDetailsRow;