import React, { useContext,  } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import PrivateRoute from '../../../Router/PrivateRoute/PrivateRoute';
import ServicesDetailsRow from './ServicesDetailsRow';

const ServicesDetails = () =>
{
    const detailsServices = useLoaderData()

    const { img, title, description, price, ratting, _id } = detailsServices;
    const { user } = useContext(AuthContext);

    const handlePlaceReviews = event =>
    {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const photoURL = user?.photoURL;

        const email = user?.email || 'unregistered';
        const review = form.review.value;

        const reviews = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            customer_photo: photoURL,
            email,
            review,
            ratting
        }

        fetch(`http://localhost:4000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data =>
            {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <img
                            src={img}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            {title}
                        </h5>
                        <p className="mb-5 text-gray-800">
                            {description}
                        </p>
                        <p className='text-[15px] font-bold'>Price: {price}$</p>
                        <p className='text-[15px] font-bold'>Rating: {ratting}</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full  mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                            <ServicesDetailsRow></ServicesDetailsRow>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="relative">

                                <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Type Your Review
                                    </h3>
                                    <form onSubmit={handlePlaceReviews}>

                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="review"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Reviews
                                            </label>
                                            <textarea
                                                name="review"
                                                id="review"
                                                className="textarea textarea-bordered h-24 flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                placeholder="Type Your Review"
                                                required>
                                            </textarea>

                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <PrivateRoute>
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                                                >
                                                    Add Review
                                                </button>
                                            </PrivateRoute>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;