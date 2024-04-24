import React from 'react'
import Navbar from '../Navigation/NavBar'
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container contact-us">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='mt-5 text-primary main-title'>contact us</h2>
                        <p className='mt-3 mb-4 fw-bold'>Write Us Anytime, We Would
                            Love To Hear From You!</p>
                    </div>

                    {/* start form */}
                    <div className="col-md-12 col-lg-6 px-2">
                        <form action="" className='pt-4 mt-5'>

                            <div className="form-group">
                                <label className='text-primary fw-bold'>first name</label>
                                <input className='form-control' type="text" name="firstname" />
                            </div>


                            <div className="form-group">
                                <label className='text-primary fw-bold'>last name</label>
                                <input className='form-control' type="text" name="lastname" />
                            </div>

                            <div className="form-group">
                                <label className='text-primary fw-bold'>email</label>
                                <input className='form-control' type="email" name="email" />
                            </div>

                            <div className="form-group">
                                <label className='text-primary fw-bold'>message</label>
                                <textarea className='form-control p-5' name="message"></textarea>
                            </div>
                            <input className='btn btn-primary' type="submit" value="send" />

                        </form>
                    </div>
                    {/* End form */}

                    <div className="col-md-12 col-lg-6 contact-banner position-relative">
                        <img className='img-fluid' src="/images/pexels-cottonbro-studio-6803545.jpg" alt="contact" />
                        <img className='img-fluid position-absolute kian-logo' src="/images/logo.jpeg" alt="logo" />
                    </div>

                    <div className='col-md-12 col-lg-4 contact-address px-5'>
                        <div className='box'>
                            <IoLocationOutline size={60} className='box-icon' />
                            <div className='box-caption px-2 py-2'>
                                <p className='text-primary fw-bold'>Zagazig Agriculture Square</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 col-lg-4 contact-address px-5'>
                        <div className='box'>
                            <CiPhone size={60} className='box-icon' />
                            <div className='box-caption py-2'>
                                <a className='text-primary fw-bold' href="mailto:ke4577216@gmail.com"><p>ke4577216@gmail.com</p></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 col-lg-4 contact-address px-5'>
                        <div className='box'>
                            <CiMail size={60} className='box-icon' />
                            <div className='box-caption px-2 py-2'>
                                <a className='text-primary fw-bold' href="tel:01062160382"><p>01062160382</p></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer />
        </div>
    )
}

export default Contact