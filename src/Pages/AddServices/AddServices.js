import React from 'react';

const AddServices = () =>
{
    const handlePlaceServices = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const img = form.photoURL.value;
        const description = form.description.value;

        const addServices = {
           title,
           price,
           ratting,
           img,
           description
        }

        fetch(`https://home-made-server.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addServices)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();
            }
        })
        .catch(error => console.log(error))

    }
    return (
        <div className='w-[90%]  my-10 mx-auto'>
            <form onSubmit={handlePlaceServices}>
                <div className='grid grid-cols-1 lg:grid-cols-2 mb-3 gap-4'>
                    <input name="title" type="text" placeholder="Enter Title" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="Enter Price" className="input input-ghost w-full  input-bordered" />
                    <input name="ratting" type="text" placeholder="Enter Ratting" className="input input-ghost w-full  input-bordered" required />
                    <input name="photoURL" type="text" placeholder="Your PhotoURL" className="input input-ghost w-full  input-bordered"  />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 mb-3 w-full" placeholder="Type Services description" required></textarea>

                <div className='text-center'>
                    <input className='btn' type="submit" value="Place Your Order" />
                </div>
            </form>
        </div>
    );
};

export default AddServices;