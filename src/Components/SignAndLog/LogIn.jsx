import React from 'react'
import Navbar from '../Navigation/NavBar'
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* <!-- =================== -->
    <!-- start login section -->
    <!-- =================== --> */}
                <div class="container">
                    <div class="row">


                        {/* <!-- =================== -->
            <!-- start image section -->
            <!-- =================== --> */}
                        <div class="col-md-6">
                            <img src="./images/kian Logo.png" class="img-fluid image animate__animated animate__rollIn" alt="..." />
                        </div>
                        {/* <!-- ================= -->
            <!-- end image section -->
            <!-- ================= --> */}

                        {/* <!-- ==================== -->
            <!-- start login section -->
            <!-- =================== --> */}
                        <div class="col-md-6">
                            <div class="wrapper">
                                <form action="">
                                    <h1 class="animate__animated animate__zoomInDown">Login</h1>
                                    <div class="input-box animate__animated animate__zoomInDown">
                                        <input type="text" placeholder="Username" required />
                                        <i class='bx bxs-user'></i>
                                    </div>

                                    <div class="input-box animate__animated animate__zoomInDown">
                                        <input type="password" placeholder="Password" required />
                                        <i class='bx bxs-lock-alt'></i>
                                    </div>

                                    <div class="remember-forgot animate__animated animate__fadeInUpBig">
                                        <label >
                                            {/* <input type="checkbox"> Remember me </input> */}
                                        </label>
                                        <Link to="/">Forgot password?</Link>
                                    </div>

                                    <button type="submit" class="btn animate__animated animate__fadeInUpBig">Login</button>

                                    <div class="register-link animate__animated animate__fadeInUpBig">
                                        <p>
                                            Don't have an account?
                                            <Link to="/signup">Register</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- ================= -->
            <!-- end login section -->
            <!-- ================= --> */}
                    </div>
                </div>
                {/* <!-- ================= -->
    <!-- end login section -->
    <!-- ================= --> */}
            </div>
        </div>
    )
}

export default LogIn