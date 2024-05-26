import React, { useEffect } from 'react'
import Navbar from '../Navigation/NavBar'
import { useLocation } from 'react-router';
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
const Profile = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Navbar />

            <div className="container contact-us">
                <div className="row">

                    <div className='d-flex justify-content-between title-all'>
                        <div className='m-auto position-relative'>
                            <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                            <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Profile</h2>
                            <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                                Nice To See You! Please Edit Profile With Your Account
                            </p>
                        </div>

                        <img className='img-fluid wow fadeInDown' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="" />
                    </div>

                    {/* start form */}
                    <div className="col-md-12 col-lg-6 px-3">
                        <form action="" className='pt-4 mt-5'>

                            <div className="form-group wow fadeInUp">
                                <label className='text-primary fw-bold'>Username</label>
                                <input className='form-control' type="text" name="Username" />
                            </div>


                            <div className="form-group wow fadeInUp">
                                <label className='text-primary fw-bold'>Email</label>
                                <input className='form-control' type="Email" name="Email" />
                            </div>

                            <div className="form-group wow fadeInUp">
                                <label className='text-primary fw-bold'>City</label>
                                <input className='form-control' type="text" name="City" />
                            </div>

                            <div className="form-group wow fadeInUp">
                                <label className='text-primary fw-bold'>Phone</label>
                                <input className='form-control' type="text" name="Phone" />
                            </div>

                            <div className="form-group wow fadeInUp">
                                <label className='text-primary fw-bold'>Password</label>
                                <input className='form-control' type="Password" name="Password" />
                            </div>

                            <div class="btn-glow mt-5 wow fadeInUp">
                                <div class="btn"><Link to="#">send</Link></div>
                            </div>
                        </form>
                    </div>
                    {/* End form */}

                    <div className="col-md-12 col-lg-6 contact-banner position-relative wow fadeInUp" data-wow-delay='1s'>
                        <img className='img-fluid' src="/images/pexels-cottonbro-studio-6803545.jpg" alt="contact" />
                        <img className='img-fluid position-absolute kian-logo' src="/images/logo.jpeg" alt="logo" />
                    </div>

                    

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate_animated animateflash animateinfinite	infinite animate_slower'
            />
            <Footer />
        </div>
    )
}

export default Profile