/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        phone: '',
    });
    const navigate = useNavigate();

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        iconColor: "#342871",
        color: "#342871",
        background: "#fff",
        padding: "10px",
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Please enter your username.';
        if (!formData.email) newErrors.email = 'Please enter your email.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
        if (!formData.phone) newErrors.phone = 'Please enter your phone.';
        if (!formData.city) newErrors.city = 'Please enter your city.';
        if (!formData.password) newErrors.password = 'Please enter your password.';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters long.';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { data } = response;

            const token = data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('role', 'disactive');

            navigate('/', { replace: true });
            Toast.fire({
                icon: "success",
                title: "Registered successfully"
            });
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors({ email: 'This email is already taken' });
            } else {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container sign-up-page">
                <div className="row">
                    <div className="col-md-6 sign-up text-center">
                        <div>
                            <h2 className="fw-bold text-primary animate__animated animate__rollIn">Welcome to our largest community</h2>
                            <h6 className="fw-bold animate__animated animate__rollIn">Let's learn something new today!</h6>
                        </div>
                        <img src="./images/login/log-in.svg" className="img-fluid animate__animated animate__rollIn" alt="..." />
                    </div>

                    <div className="col-md-6 m-auto animate__animated animate__zoomInDown signup-inputs p-5">
                        <h2 className="text-primary fw-bold">Sign up for your <br />account!</h2>
                        <h6 className='fw-bold'>Nice to see you! Please sign up with your account.</h6>

                        <form className='mt-4 signup-form' onSubmit={handleSubmit} autoComplete='on'>
                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='username' className="text-primary">Username *</label>
                                <input id='username' type="text" name='username' value={formData.username} onChange={handleInputChange} className="form-control" placeholder="Your name" autoComplete="username" />
                                <i className="fa-solid fa-user input-icon text-muted"></i>
                                {errors.username && <h6 className="error-log">{errors.username}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='email' className="text-primary">E-mail *</label>
                                <input id='email' type="email" name='email' value={formData.email} onChange={handleInputChange} className="form-control" placeholder="E-mail" autoComplete="email" />
                                <i className="fa-solid fa-envelope input-icon text-muted"></i>
                                {errors.email && <h6 className="error-log">{errors.email}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='phone' className="text-primary">Phone *</label>
                                <input id='phone' type="tel" name='phone' value={formData.phone} onChange={handleInputChange} className="form-control" placeholder="Phone" autoComplete="tel" />
                                <i className="fa-solid fa-phone input-icon text-muted"></i>
                                {errors.phone && <h6 className="error-log">{errors.phone}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='city' className="text-primary">City *</label>
                                <input id='city' type="text" name='city' value={formData.city} onChange={handleInputChange} className="form-control" placeholder="City" autoComplete="address-level2" />
                                <i className="fa-solid fa-city input-icon text-muted"></i>
                                {errors.city && <h6 className="error-log">{errors.city}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='password' className="text-primary">Password *</label>
                                <input id='password' type="password" name='password' value={formData.password} onChange={handleInputChange} className="form-control" placeholder="**********" autoComplete="new-password" />
                                <i className="fa-solid fa-lock input-icon text-muted"></i>
                                {errors.password && <h6 className="error-log">{errors.password}</h6>}
                            </div>

                            <div className="form-group animate__animated animate__zoomInDown position-relative">
                                <label htmlFor='confirmPassword' className="text-primary">Confirm Password *</label>
                                <input id='confirmPassword' type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} className="form-control" placeholder="**********" autoComplete="new-password" />
                                <i className="fa-solid fa-lock input-icon text-muted"></i>
                                {errors.confirmPassword && <h6 className="error-log">{errors.confirmPassword}</h6>}
                            </div>

                            <div className="form-check my-4">
                                <input className="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                <label htmlFor='flexCheckDefault' className="form-check-label">
                                    By signing up, you agree to the terms of service
                                </label>
                            </div>

                            <input className="btn-submit" type="submit" value="Sign up" />

                            <div className="row">
                                <div className="position-relative my-4">
                                    <hr />
                                    <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                                </div>

                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn btn-primary btn-block mb-2 signup-with"><i className="fab fa-fw fa-google me-2"></i>Signup with Google</a>
                                </div>

                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn btn-primary btn-block signup-with-facebook"><i className="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook</a>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <span className='text-muted'>Already have an account?<Link to="/login"> Sign in here</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color='#fff' style={{ backgroundColor: '#372B73' }} className='animate__animated animate__flash animate__infinite infinite animate__slower' />
        </div>
    );
};

export default SignUp;
