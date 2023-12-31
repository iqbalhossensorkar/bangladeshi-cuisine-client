import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, user } = useContext(AuthContext);
    const [userName, setUserName] = useState('')
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState('')
    const [termsCheck, setTermCheck] = useState(false);
    const [show, setShow] = useState(false);
    const handleShowHide = () => {
        setShow(!show);
    }

    const handleTermsCheck = event => {
        setTermCheck(event.target.checked)
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        // console.log(name, email, photoURL, check, password);

        if (!/^.{6,16}$/.test(password)) {
            setError("Password should be at least 6 characters.");
            return;
        }

        createUser(email, password)
            .then(result => {
                form.reset();
                const createdId = result.user;
                handleUserUpdate(createdId, name, photoURL)
                // console.log(createdId);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleUserUpdate = (result, name, photoURL) => {
        updateProfile(result, {
            displayName: name,
            photoURL: photoURL,

        })
            .then(() => {
                console.log(result.displayName, result.photoURL);
                setUserName(result.displayName);
                setPhoto(result.photoURL)
            }).catch((error) => {
                console.log('error', error.message);
            });
    }

    return (
        <>
            {
                !user ?

                    <div className='container mx-auto mb-10'>
                        <div className="hero min-h-screen">
                            <div className="hero-content">
                                <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                                    <form onSubmit={handleSignUp} className="card-body">
                                        <img src={logo} alt="" />
                                        <div className="form-control">
                                            <input type="text" name='name' placeholder="Name" className="input input-bordered input-error w-full max-w-xs" required />
                                        </div>
                                        <div className="form-control">
                                            <input type="email" name='email' placeholder="Email" className="input input-bordered input-error w-full max-w-xs" required />
                                        </div>
                                        <div className="form-control">

                                            <label className='input-group'>
                                                <input type={!show ? 'password' : 'text'} name='password' placeholder="Password" className="input input-bordered input-error w-full max-w-xs" required /><span><div onClick={handleShowHide}>
                                                    {
                                                        show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                                    }
                                                </div></span>
                                            </label>
                                            {error && <p className='text-error'><small>{error}</small></p>}
                                        </div>
                                        <div className="form-control">
                                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered input-error w-full max-w-xs" />
                                        </div>
                                        <label className="label">
                                            <span className='flex items-center '><input onClick={handleTermsCheck} type="checkbox" name="check" id="" /><small className='ml-2'>Accept Our <Link className='text-blue-500 link link-hover hover:text-black' to='/terms'>Terms & Conditions</Link></small></span>
                                        </label>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-error" disabled={!termsCheck}>Register</button>
                                        </div>
                                        <p>Already have an account? <Link className='text-blue-500 text-center link link-hover hover:text-black' to="/login">Login Now</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div >

                    :
                    <div className='hero min-h-screen'>
                        {/* <div className="avatar">
                            <div className="w-16 rounded-full mb-44">
                                <img src={user?.photoURL} />
                            </div>
                        </div> */}
                        <p className='mb-12'>Good job, <strong>{user?.displayName}</strong>. Have fun😍😍😍</p>
                        <Link className='btn btn-error mt-28' to="/">Home</Link>
                    </div>
            }

        </ >

    );
};

export default Register;