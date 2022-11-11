import React from 'react';

const CustomerEating = () =>
{
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        satisfied customer
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    Home Made Food Delivered Scene
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://c.ndtvimg.com/2019-02/eg0n29ag_swiggy-food-delivery_625x300_20_February_19.jpg"
                    alt=""
                />
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F23%2F6-polite-things-you-fo-when-getting-takeout-delivery-that-are-actually-rude-copy.jpg&q=60"
                    alt=""
                />
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://www.aceturtle.com/wp-content/uploads/2018/12/Returns-Managemet_BannerImage.png"
                    alt=""
                />
                <img
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPSJsV_nppoaE9vZ13TPhKHNHHJ-Cuv5ItZhFULN0Ou7gQwv6vwauUQcF7SUHgT75S94&usqp=CAU"
                    alt=""
                />
            </div>
        </div>
    );
};

export default CustomerEating;