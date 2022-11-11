import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('sign up');

    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
                handleUpdateUserProfile(name, photoURL);
                toast.success('User Sign UP Successful', {
                    position: "top-center"
                });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                form.reset();
                toast.error(error.message, {
                    position: "top-center"
                });
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => {

            })
            .catch(() => {
                console.error(error);
            })
    }

    return (


        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign Up
                </h1>

                <form onSubmit={handleSignUp} className="mt-6">

                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Full Name
                        </label>
                        <input type="text" name='name' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Full Name' required />
                    </div>

                    <div className="mb-2">
                        <label for="text" className="block text-sm font-semibold text-gray-800">
                            Photo URL
                        </label>
                        <input type="text" name='photoURL' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Photo URL' required />
                    </div>

                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input type="email" name='email' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='Email' required />
                    </div>

                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input type="password" name='password' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Password' required />
                    </div>

                    <div className="mb-2">
                        <p className='text-orange-500 font-bold p-3 fw-bold rounded'>
                            {error}
                        </p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 uppercase font-bold">
                            Sign Up
                        </button>
                    </div>
                </form>


                <p className="mt-8 text-md font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to='/login' className="text-purple-600 hover:underline font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;