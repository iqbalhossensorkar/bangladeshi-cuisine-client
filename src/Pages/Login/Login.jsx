import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { googleSignIn, githubSignIn, signIn } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'

    const handleShowHide = () => {
        setShow(!show);
    }

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                form.reset();
                const loggedIn = result.user;
                console.log(loggedIn);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
                setErrorMessage(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleLoggedIn = result.user;
                console.log(googleLoggedIn);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const githubLoggedIn = result.user;
                console.log(githubLoggedIn);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className='container mx-auto mb-10'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <img src={logo} alt="" />
                                <span onClick={handleGoogleSignIn} className='btn btn-outline btn-info w-full mb-4'><FaGoogle className='mr-3 h-5'></FaGoogle>Continue with google</span>
                                <span onClick={handleGithubSignIn} className='btn btn-outline w-full'><FaGithub className='mr-3 h-5'></FaGithub>Continue with github</span>
                                <p className='text-center mb-4'>Or</p>
                                <input type="email" name='email' placeholder="email" className="input input-bordered input-error w-full max-w-xs" required />
                            </div>
                            <div className="form-control">
                                <label className='input-group'>
                                    <input type={!show ? 'password' : 'text'} name='password' placeholder="Password" className="input input-bordered input-error w-full max-w-xs" required /><span><div onClick={handleShowHide}>
                                        {
                                            show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </div></span>
                                </label>
                            </div>
                            {errorMessage && <p className='text-error'><small>{errorMessage}</small></p>}
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