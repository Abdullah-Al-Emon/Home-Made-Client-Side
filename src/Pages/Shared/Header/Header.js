// import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/home-made-logo.png'
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () =>
{
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () =>
    {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='hover:link'>Home</Link></li>
                        <li><Link to='/services' className='hover:link'>Services</Link></li>
                        <li><Link to='/blog' className='hover:link'>Blogs</Link></li>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='/myReviews' className='hover:link'>My Reviews</Link></li>
                                        <li><Link to='blog' className='hover:link'>Add Service</Link></li>
                                        <li><Link onClick={handleLogOut} className="btn text-white ml-2 bg-gray-600 hover:bg-gray-900">Sign Out</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to='/signUp' className='hover:link'>Sign Up</Link></li>
                                        <li><Link to='/signIn' className="btn text-white ml-2 bg-gray-600 hover:bg-gray-900">Sign In</Link></li>
                                    </>
                            }
                        </>
                    </ul>
                </div>
                <img src={logo} className='w-24 h-16' alt="" />
                <Link to='/' className=" ml-3 normal-case text-2xl font-bold">HOME MADE</Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="font-semibold menu menu-horizontal p-0">
                    <li><Link to='/' className='hover:link'>Home</Link></li>
                    <li><Link to='/services' className='hover:link'>Services</Link></li>
                    <li><Link to='/blog' className='hover:link'>Blogs</Link></li>
                    <>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/myReviews' className='hover:link'>My Reviews</Link></li>
                                    <li><Link to='blog' className='hover:link'>Add Service</Link></li>
                                    <li><Link onClick={handleLogOut} className="btn text-white ml-2 bg-gray-600 hover:bg-gray-900">Sign Out</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to='/signUp' className='hover:link'>Sign Up</Link></li>
                                    <li><Link to='/signIn' className="btn text-white ml-2 bg-gray-600 hover:bg-gray-900">Sign In</Link></li>
                                </>
                        }
                    </>
                </ul>
            </div>

        </div>
    );
};

export default Header;