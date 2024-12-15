import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Navbar = () => {

    const { user, signout } = useContext(AuthContext);
    const links = <>
        <li><NavLink>All Jobs</NavLink></li>
        {/* <li><NavLink to={'/jobDetails'}>Job Details</NavLink></li> */}
        <li><NavLink to={'/addjob'}>Add Job</NavLink></li>
        {/* <li><NavLink>Apply for Job</NavLink></li> */}
        <li><NavLink to={'/myApplications'}>My Apllications</NavLink></li>
        {/* <li><NavLink>My Job Posts</NavLink></li> */}
        {/* <li><NavLink>Review Aplications</NavLink></li> */}
        {/* <li><NavLink>Update Job</NavLink></li> */}
    </>


    const handleSignOut = () => {
        signout()
            .then(res => { console.log(res.user) })
            .catch(err => { console.log(err.message) })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">Job Portal</Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-1 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            {/* <p>{user.email}</p> */}
                            <button
                                onClick={handleSignOut}
                                className='btn'>SingOut</button>
                        </> :
                            <>
                                <Link to={'/login'} className="btn">Sign In </Link>
                                <Link to={'/register'} className='btn'>Register</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;