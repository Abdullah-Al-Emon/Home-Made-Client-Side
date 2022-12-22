import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';


const SignIn = () =>
{
    useTitle('Sign')
    const { googleSignIn, logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const user =result.user;
            form.reset()
            navigate(from, {replace: true})
            console.log(user)
            toast.success("Log In Complete")
        })
        .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
            toast.success("Google Sign In Complete")
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="relative">
            <img
                src="https://media.istockphoto.com/photos/vegan-glutenfree-creamy-spinach-pasta-picture-id1182467837?b=1&k=20&m=1182467837&s=170667a&w=0&h=p9eHGFxW8rz85sNqLzQBUYbcORcdNlGfWH85OM_DevI="
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-25">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                This is HOME MADE <br className="hidden md:block" />
                                User Sign In.
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                quae.
                            </p>

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign In
                                </h3>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="Enter Your E-mail"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Enter Your Password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    <p className="text-center text-gray-600">
                                        Don't have an account? <Link to='/signUp' className='text-gray-900 font-semibold'>Sign Up</Link>
                                    </p>
                                </form>
                                <div>
                                    <p className='text-center my-2 font-semibold'><small>OR</small></p>
                                    <p className='text-center'>
                                        <button onClick={handleGoogleSignIn} className='btn btn-ghost font-bold text-white bg-gray-600 hover:bg-gray-900'><FaGoogle className='text-gray-300 text-2xl mr-3'></FaGoogle> Google</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;