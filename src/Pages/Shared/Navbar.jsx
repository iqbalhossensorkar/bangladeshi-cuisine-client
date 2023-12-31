import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    const handleLogOut = () => {
        // console.log('Log uot');
        logOut()
            .then(result => { })
            .catch(error => { console.log('error', error.message); })

    }
    return (
        <div className="container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <img src={logo} alt="company logo" className='h-20 lg:h-28' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>

                            <div className="tooltip" data-tip={user?.displayName}>
                                <div className="avatar">
                                    <div className="w-10 rounded-full mr-4">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <button className='btn' onClick={handleLogOut}>sign out</button></>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;