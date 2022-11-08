import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
                toast.success('User Successfully Logout', {
                    position: "top-center"
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div className="navbar bg-base-100 mb-8 pt-3 pb-3 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>

                        {
                            user?.uid ?
                                <>
                                    <span className="d-inline-block">
                                        {
                                            user?.photoURL ?
                                                <img alt='User'
                                                    style={{ height: '40px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </img>
                                                : <div>User</div>
                                        }
                                    </span>
                                    <li>
                                        <button onClick={handleSignOut} className="btn btn-outline btn-warning">Sign Out</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to='/login'>Login</Link>
                                    </li>
                                    <li>
                                        <Link to='/signup'>Sign Up</Link>
                                    </li>
                                </>
                        }



                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img style={{ height: '45px', width: '65px' }} src={logo} alt="" />
                    RR Dental Care Services
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                        user?.uid ?
                            <>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <span className="d-inline-block">
                                        {
                                            user?.photoURL ?
                                                <img className='rounded-full' alt='User'
                                                    style={{ height: '40px' }}
                                                    src={user?.photoURL}>
                                                </img>
                                                : <div>User</div>
                                        }
                                    </span>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li>
                                    <button onClick={handleSignOut} className="btn btn-outline btn-warning">Sign Out</button>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/signup'>Sign Up</Link>
                                </li>
                            </>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className='btn btn-accent rounded-none'> BOOK ONLINE</Link>
            </div>
        </div>

    );
};

export default Header;