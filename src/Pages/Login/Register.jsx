import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='container mx-auto mb-10'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <img src={logo} alt="" />
                                <input type="text" name='name' placeholder="Name" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <input type="email" name='email' placeholder="Email" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <div className="form-control">

                                <input type="password" name='password' placeholder="Password" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <label className="label">
                                <span className='flex items-center '><input type="checkbox" name="check" id="" /><small className='ml-2'>Accept Our <Link className='text-blue-500 link link-hover hover:text-black'>Terms & Conditions</Link></small></span>
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Register</button>
                            </div>
                            <p>Already have an account? <Link className='text-blue-500 text-center link link-hover hover:text-black' to="/login">Login Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;