import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto mb-10'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <img src={logo} alt="" />
                                <p className='btn btn-outline btn-info w-full mb-4'><FaGoogle className='mr-3 h-5'></FaGoogle>Continue with google</p>
                                <p className='btn btn-outline w-full'><FaGithub className='mr-3 h-5'></FaGithub>Continue with github</p>
                                <p className='text-center mb-4'>Or</p>
                                <input type="email" name='email' placeholder="email" className="input input-bordered input-error w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" name='password' placeholder="password" className="input input-bordered input-error w-full max-w-xs" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                            <p>Dont have an account yet? <Link className='text-blue-500 text-center link link-hover hover:text-black' to="/register">Register Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;